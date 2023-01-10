import kotlinx.serialization.Serializable

// Float value range from -1 (ASTRE) to 1 (IPS)
@Serializable
data class Indicator(
    val id: String,
    val paradigm: Float,
    val technos: Float,
    val highschoolSubjects: Float,
    val s5Subjects: Float,
    val softwaresUsage: Float,
    val devices: Float,
    val assos: Float,
    val hobbies: Float,
    val previousCursus: Float,
    val oS: Float
)
