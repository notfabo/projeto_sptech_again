package api.againrest.requests

import api.againrest.models.Feedback
import java.time.OffsetDateTime

data class FeedbackDTO(
    val idFeedback: Int,
    val ratingFeedback: Int?,
    val comentarioFeedback: String?,
    val motivoFeedback: String?,
    val estrategiaFeedback: String?,
    val objetivoFeedback: String?,
    val dataFeedback: OffsetDateTime?,
    val autor: AutorDTO
)

data class AutorDTO(
    val id: Int,
    val tipo: Feedback.AutorTipo,
    val nome: String?,
    val email: String?
)