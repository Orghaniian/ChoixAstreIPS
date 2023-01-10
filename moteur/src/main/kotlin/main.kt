import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.decodeFromStream
import kotlinx.serialization.json.encodeToStream
import java.io.File
import kotlin.math.pow

private val json = Json { prettyPrint = true }
private const val DEFAULT_OUTPUT_NAME = "indicateurs.json"

@OptIn(ExperimentalSerializationApi::class)
fun main(args: Array<String>) {
    val path = if(args.size == 1) {
        args[0]
    } else {
        print("Chemin du fichier de données: ")
        readln()
    }.trimQuotes()

    val responses = Json.decodeFromStream<Responses>(File(path).inputStream())

    val indicators = responses.responses.map { processResponse(it) }

    readOutputPath().run {
        outputStream().use { out ->
            json.encodeToStream(indicators, out)
        }
        print(absolutePath)
    }
}

fun processResponse(response: Response) = Indicator(
    response.id,
    response.response3.let {
        val result = (it.oop - 1)/2f + (it.functional - 1)/2f + (it.procedural - 1)/-2f
        (0.833333 * result - 0.166667 * result.pow(2)).toFloat()
    },
    response.response4.let {
        val result = it.web/5f + it.mobile/5f + it.gameDev/5f + it.cloud/5f * (.7f - .3f) + it.embedded/-5f
        (0.844738 * result - 0.155262 * result.pow(2)).toFloat()
    },
    response.response5.let {
        it.fold(0) { acc, subject ->
            when(subject) {
                Response.Response5.ARTS, Response.Response5.ISN, Response.Response5.LITERATURE -> acc + 1
                Response.Response5.ELECTRONIC -> acc -1
                else -> acc
            }
        }
    }.toFloat().coerceIn(-1f, 1f),
    response.response6.let {
        it.fold(0f) { acc, subject ->
            when(subject) {
                Response.Response6.ARCHI -> acc + .2f - .8f
                Response.Response6.PORJECT_MANAGMENT -> acc + .8f - .2f
                Response.Response6.CRYPTO, Response.Response6.HMI, Response.Response6.IT -> acc + 1
                Response.Response6.ELECTRONIC, Response.Response6.LOGIC -> acc - 1
                else -> acc
            }
        }
    }.toFloat().coerceIn(-1f, 1f),
        (response.response7.labview.weight * -1
        + response.response7.excel.weight * (.8f - .2f)
        + response.response7.blender.weight
        + response.response7.unity.weight + response.response7.figma.weight
        + response.response7.solidWorks.weight * (.3f - .7f)
        + response.response7.autoCAD.weight * -1f)
        .coerceIn(-1f, 1f),
    response.response8.let {
        it.fold(0f) { acc, device ->
            when(device) {
                Response.Response8.PRINTING_3D, Response.Response8.PROGRAMMABLE_IO_CARDS -> acc + .3f - .7f
                Response.Response8.OSCILLOSCOPE, Response.Response8.NOTHING, Response.Response8.DRONE -> acc - 1
                Response.Response8.NEURAL_HEADSET, Response.Response8.VR_HEADSET -> acc + 1
                Response.Response8.SMARTPHONE -> acc - 1f + 0.9f
            }
        }
    }.coerceIn(-1f, 1f),
        (response.response9.kartel.weight
        + response.response9.ensimersion.weight
        + response.response9.lensimien.weight
        + response.response9.ensimelec.weight * -1f)
        .coerceIn(-1f, 1f),
    if(response.response11.contains(Response.Response11.ART)) 1f else 0f,
    if(listOf(Response.Response14.BTS_SIO, Response.Response14.DUT_INFORMATIQUE, Response.Response14.CPGE_BL)
        .contains(response.response14)) 1f else 0f,
    if(response.response15 == Response.Response15.MACOS) 1f else 0f
)

fun readOutputPath(): File {
    print("Chemin du fichier dans lequel seront stockés les indicateurs: ")
    val path = readln().trimQuotes().ifEmpty { DEFAULT_OUTPUT_NAME }

    var output = File(path)

    if(output.exists() && output.isDirectory) output = File(path, DEFAULT_OUTPUT_NAME)

    if(output.extension == "") output = File(output.name + ".json")

    return output
}

fun String.trimQuotes() = replace(Regex("^\"|\"$"), "")