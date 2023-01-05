import kotlinx.serialization.Serializable

@Serializable
data class Responses(
    val responses: List<Response>
)

@Serializable
data class Response(
    val id: String,
    val response2: Response2,
    val response3: Response3,
    val response4: Response4,
    val response5: List<Response5>,
    val response6: List<Response6>,
    val response7: Response7,
    val response8: List<Response8>,
    val response9: Response9,
    val response10: Response10,
    val response11: List<Response11>,
    val response12: Response12,
    val response13: Response13,
    val response14: Response14,
    val response15: Response15,
) {
    enum class Response2(val value: String) {
        EXPERT("C’est un professionnel expert dans un domaine technique capable de résoudre des problèmes de haut niveau et innovants."),
        MAN("Un ingénieur est un Homme capable de prendre du recul et d’avoir une solide culture générale, technique et humaine."),
        EXECUTIVE("C’est avant tout un cadre supérieur technique qui a pour mission de piloter un projet et de gérer une ou plusieurs équipes en interface avec le client.")
    }

    @Serializable
    data class Response3(
        val procedural: Int,
        val oop: Int,
        val functional: Int,
    )

    @Serializable
    data class Response4(
        val web: Int,
        val cloud: Int,
        val embedded: Int,
        val mobile: Int,
        val gameDev: Int
    )

    enum class Response5(val value: List<String>) {
        MATHS(listOf("Maths")),
        PHYSIC(listOf("Physique/Chimie")),
        HISTORY(listOf("Histoire/Géographie")),
        ES(listOf("Sciences de l'ingénieur")),
        ARTS(listOf("Arts Plastiques/Arts appliqués")),
        GERMAN(listOf("Allemand")),
        SPORT(listOf("Sport")),
        ENGLISH(listOf("Anglais")),
        MANAGMENT(listOf("Sciences de gestion")),
        ELECTRONIC(listOf("Électronique numérique")),
        ISN(listOf("Informatique et sciences du numerique", "Informatique et science du numerique", "Informatique et Sciences du Numérique")),
        LITERATURE(listOf("Littérature/Philosophie")),
    }

    enum class Response6(val value: String) {
        CRYPTO("Cryptographie (en Maths)"),
        ELECTRONIC("Electronique"),
        PROGRAMMING("Programmation informatique"),
        ALGO("Algorithmique"),
        ARCHI("Architecture des ordinateurs"),
        LOGIC("Logique combinatoire et séquentielle"),
        ENGLISH("Anglais"),
        HMI("Introduction aux IHM"),
        IT("Technologie de l’internet"),
        PHYSIC("Physique"),
        LABOR_LAW("Droit du travail"),
        PORJECT_MANAGMENT("Conduite de projet")
    }

    @Serializable
    data class Response7(
        val labview: Frequency,
        val excel: Frequency,
        val blender: Frequency,
        val unity: Frequency,
        val figma: Frequency,
        val ciscoPacketTracer: Frequency,
        val solidWorks: Frequency,
        val autoCAD: Frequency,
    ) {
        enum class Frequency(val value: String) {
            UNKNOWN("Ne connais pas"),
            NEVER("Jamais"),
            LOW("Un peu"),
            REGULARLY("Régulièrement"),
            ALWAYS("Tout le temps");

            companion object {
                fun fromValue(value: String) = if(value.isBlank()) NEVER else values().firstOrNull { it.value == value.trim() }  ?: throw NoSuchElementException("$value not found in Response7.Frequency.values()")
            }
        }
    }

    enum class Response8(val value: String) {
        PRINTING_3D("Imprimante 3D"),
        PROGRAMMABLE_IO_CARDS("Cartes électroniques programmables (Arduino, Raspberry...)"),
        OSCILLOSCOPE("Oscilloscope"),
        NEURAL_HEADSET("Casque neuronal"),
        SMARTPHONE("Smartphones"),
        NOTHING("Rien, les ordis c’est très bien"),
        DRONE("Drone"),
        VR_HEADSET("Casque VR")
    }

    @Serializable
    data class Response9(
        val kartel: Interested,
        val ensimersion: Interested,
        val ensimelec: Interested,
        val enigma: Interested,
        val lensimien: Interested
    )
    {
        enum class Interested(val value: String) {
            IDK("Ne connais pas"),
            IDC("Pas intéressé"),
            INTERESTED("Interessé"),
            ALREADY_MEMBER("J'y suis");

            companion object {
                fun fromValue(value: String) = if(value.isBlank()) IDK else values().firstOrNull { it.value == value.trim() }  ?: throw NoSuchElementException("$value not found in Response9.Interested.values()")
            }
        }
    }

    enum class Response10(val value: String) {
        MARIO_STATUE("Statue de Mario"),
        BUTTONS("Des boutons"),
        ARDUINO_CASE("Boitier pour sa carte arduino"),
        PHONE_SHIELD("Une coque de téléphone")
    }

    enum class Response11(val value: String) {
        READING("Lecture"),
        DIY("Bricolage"),
        VIDEO_GAMES("Jeux vidéos"),
        CODING("Programmation"),
        SPORT("Sport"),
        ART("Art Dessin"),
        MUSIC("Musique"),
        WORKOUT("Musculation"),
        TRADING("Trading"),
        HOME_AUTOMATIC("Automatiser ma maison"),
        TABLE_GAMES("Jeux de société"),
        COOKING("Cuisine/patisserie"),
    }

    enum class Response12(val value: String) {
        YES("Oui"),
        NO("Non")
    }

    enum class Response13(val value: String) {
        BIOS("Vous essayez de le réparer en passant par le BIOS"),
        HARDWARE("Vous le démontez pour comprendre d'où vient le problème"),
        REPAIRER("Vous allez voir un réparateur")
    }

    enum class Response14(val value: String) {
        PREPA_INTEGRE("Prépa intégré"),
        BTS_SIO("BTS SIO"),
        BTS_SN("BTS SN"),
        DUT_INFORMATIQUE("DUT Informatique"),
        CPGE_MP2I_MPSI("CPGE MP2I/MPSI"),
        CPGE_MP("CPGE MP"),
        CPGE_BL("CPGE BL"),
        NA("N/A")
    }

    enum class Response15(val value: String) {
        WINDOWS("Windows"),
        MACOS("MacOS"),
        DISTRIBUTION_LINUX("Distribution Linux (Ubuntu, Debian, Arch...)")
    }
}
