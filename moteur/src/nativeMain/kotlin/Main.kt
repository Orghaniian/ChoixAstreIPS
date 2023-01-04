fun main(args: Array<String>) {
    val path = if(args.size == 1) {
        args[0].trimQuotes()
    } else {
        print("Chemin du fichier de données: ")
        readln().trimQuotes()
    }

    print(path)
}

fun String.trimQuotes() = replace(Regex("^\"|\"$"), "")