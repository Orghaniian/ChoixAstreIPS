import com.opencsv.CSVReader
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.encodeToStream
import java.io.File
import java.text.Normalizer

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

    val responses = CSVReader(File(path).bufferedReader()).use { csvReader ->
        csvReader.skip(1)
        csvReader.map(::processLine)
    }.let {
        Responses(it)
    }

    readOutputPath().run {
        outputStream().use { out ->
            json.encodeToStream(responses, out)
        }
    }
}

fun readOutputPath(): File {
    print("Chemin du fichier dans lequel seront stockés les indicateurs: ")
    val path = readln().trimQuotes().ifEmpty { DEFAULT_OUTPUT_NAME }

    var output = File(path)

    if(output.exists() && output.isDirectory) output = File(path, DEFAULT_OUTPUT_NAME)

    if(output.extension == "") output = File(output.name + ".json")

    return output
}


fun processLine(line: Array<String>) = Response(
    line[1].trim(),
    Response.Response2.values().firstOrNull { it.value == line[2].trim() } ?: throw NoSuchElementException("${line[2].trim()} not found in Response2.values()"),
    Response.Response3(line[3].toInt(), line[4].toInt(), line[5].toInt()),
    Response.Response4(line[6].toInt(), line[7].toInt(), line[8].toInt(), line[9].toInt(), line[10].toInt()),
    line[11].split(",").map { subject -> Response.Response5.values().firstOrNull { value -> value.value.firstOrNull { it.clean() == subject.clean() } != null} ?: throw NoSuchElementException("$subject not found in Response5.values()") },
    line[12].split(",").map { subject -> Response.Response6.values().firstOrNull { it.value == subject.trim() } ?: throw NoSuchElementException("$subject not found in Response6.values()") },
    Response.Response7(
        Response.Response7.Frequency.fromValue(line[13]),
        Response.Response7.Frequency.fromValue(line[14]),
        Response.Response7.Frequency.fromValue(line[15]),
        Response.Response7.Frequency.fromValue(line[16]),
        Response.Response7.Frequency.fromValue(line[17]),
        Response.Response7.Frequency.fromValue(line[18]),
        Response.Response7.Frequency.fromValue(line[19]),
        Response.Response7.Frequency.fromValue(line[20]),
    ),
    buildList {
        Response.Response8.values().forEach {
            if(line[21].contains(it.value)) add(it)
        }
    },
    Response.Response9(
        Response.Response9.Interested.fromValue(line[22]),
        Response.Response9.Interested.fromValue(line[23]),
        Response.Response9.Interested.fromValue(line[24]),
        Response.Response9.Interested.fromValue(line[25]),
        Response.Response9.Interested.fromValue(line[26]),
    ),
    Response.Response10.values().firstOrNull { it.value == line[27] } ?: throw NoSuchElementException("${line[27]} not found in Response10.values()"),
    line[28].split(',').map { hobby -> Response.Response11.values().firstOrNull { it.value.lowercase() == hobby.trim().lowercase() } ?: throw NoSuchElementException("$hobby not found in Response11.values()") },
    line[29].let { value ->
        if (value.isBlank()) Response.Response12.NO
        else Response.Response12.values().firstOrNull { it.value == line[29] } ?: throw NoSuchElementException("${line[29]} not found in Response12.values()")
    },
    Response.Response13.values().firstOrNull { it.value == line[30] } ?: throw NoSuchElementException("${line[30]} not found in Response13.values()"),
    line[31].let{ value ->
        if (value.isBlank()) Response.Response14.NA
        else Response.Response14.values().firstOrNull { it.value == value } ?: throw NoSuchElementException("${line[31]} not found in Response14.values()")
    },
    Response.Response15.values().firstOrNull { it.value == line[32] } ?: throw NoSuchElementException("${line[32]} not found in Response15.values()"),
)

fun String.clean(): String = trim().lowercase().normalize()

fun String.normalize(): String = Normalizer.normalize(this, Normalizer.Form.NFD)

fun String.trimQuotes() = replace(Regex("^\"|\"$"), "")