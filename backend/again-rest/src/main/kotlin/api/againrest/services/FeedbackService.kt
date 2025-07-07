package api.againrest.services

import api.againrest.models.Feedback
import api.againrest.repositories.FeedbackRepository
import api.againrest.repositories.OportunidadeRepository
import api.againrest.requests.AutorDTO
import api.againrest.requests.FeedbackDTO
import org.springframework.stereotype.Service

@Service
class FeedbackService(
    private val feedbackRepository: FeedbackRepository,
    private val oportunidadeRepository: OportunidadeRepository,
) {
    fun obterFeedbackPorOportunidade(idOportunidade: Int): List<FeedbackDTO> {
        val feedbacks = feedbackRepository.findByOportunidade(idOportunidade)
        return feedbacks.map { feedback ->
            val autor = when (feedback.autorTipo) {
                Feedback.AutorTipo.vendedor -> feedback.vendedor?.let {
                    AutorDTO(it.idVendedor, Feedback.AutorTipo.vendedor, it.nome, it.email)
                }
                Feedback.AutorTipo.gerente -> feedback.gerente?.let {
                    AutorDTO(it.idGerente, Feedback.AutorTipo.gerente, it.nome, it.email)
                }
                else -> null
            }
            FeedbackDTO(
                idFeedback = feedback.idFeedback,
                ratingFeedback = feedback.ratingFeedback,
                comentarioFeedback = feedback.comentarioFeedback,
                motivoFeedback = feedback.motivoFeedback,
                objetivoFeedback = feedback.objetivoFeedback,
                estrategiaFeedback = feedback.estrategiaFeedback,
                dataFeedback = feedback.dataFeedback,
                autor = autor ?: throw IllegalArgumentException("Autor não encontrado")
            )
        }
    }


    fun obterFeedbackPorAutor(autorTipo: Feedback.AutorTipo, autorId: Int): List<Feedback> {
        return feedbackRepository.findByAutor(autorTipo, autorId)
    }

    fun salvarFeedback(feedback: Feedback): Feedback {
        println("Recebendo feedback com rating: ${feedback.ratingFeedback}")

        feedback.oportunidade = oportunidadeRepository.findById(
            feedback.oportunidade?.idOportunidade ?: 0
        ).orElse(null)

        if (feedback.fkAutor == null) {
            throw IllegalArgumentException("O campo fkAutor deve ser informado!")
        }

        return feedbackRepository.save(feedback)
    }

    fun atualizarFeedback(idFeedback: Int, novoFeedback: Feedback): Feedback? {
        val feedbackExistente = feedbackRepository.findById(idFeedback)
        return if (feedbackExistente.isPresent) {
            val feedbackAtualizado = feedbackExistente.get().apply {
                ratingFeedback = novoFeedback.ratingFeedback
                comentarioFeedback = novoFeedback.comentarioFeedback
                motivoFeedback = novoFeedback.motivoFeedback
                objetivoFeedback = novoFeedback.objetivoFeedback
                estrategiaFeedback = novoFeedback.estrategiaFeedback
                dataFeedback = novoFeedback.dataFeedback
            }
            feedbackRepository.save(feedbackAtualizado)
        } else {
            null
        }
    }

    fun obterRatingPorOportunidade(idOportunidade: Int): Double {
        return feedbackRepository.calcularRatingPorOportunidade(idOportunidade)
    }

    fun calcularMediaRatingPorMes(mes: Int): Double {
        return feedbackRepository.calcularMediaPorMes(mes)
    }
}