import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.decodeFromStream
import java.io.File

@OptIn(ExperimentalSerializationApi::class)
fun main(args: Array<String>) {
    val path = if(args.size == 1) {
        args[0]
    } else {
        print("Chemin du fichier de données: ")
        readln()
    }.trimQuotes()

    val responses = Json.decodeFromStream<Responses>(File(path).inputStream())
}

fun String.trimQuotes() = replace(Regex("^\"|\"$"), "")