package api.againrest.controllers

import api.againrest.models.Feedback
import api.againrest.requests.FeedbackDTO
import api.againrest.services.FeedbackService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/feedbacks")
class FeedbackController(
    private val feedbackService: FeedbackService,
) {
    @GetMapping("/porOportunidade/{idOportunidade}")
    fun getFeedbackPorOportunidade(@PathVariable idOportunidade: Int): ResponseEntity<List<FeedbackDTO>> {
        val feedbacks = feedbackService.obterFeedbackPorOportunidade(idOportunidade)
        return if (feedbacks.isNotEmpty()) {
            ResponseEntity.ok(feedbacks)
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @GetMapping("/porAutor")
    fun getFeedbackPorAutor(
        @RequestParam autorTipo: Feedback.AutorTipo,
        @RequestParam autorId: Int
    ): ResponseEntity<List<Feedback>> {
        val feedbacks = feedbackService.obterFeedbackPorAutor(autorTipo, autorId)
        return if (feedbacks.isNotEmpty()) {
            ResponseEntity.ok(feedbacks)
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @PostMapping
    fun salvarFeedback(@RequestBody feedback: Feedback): ResponseEntity<Feedback> {
        val feedbackSalvo = feedbackService.salvarFeedback(feedback)
        return ResponseEntity.ok(feedbackSalvo)
    }

    @PutMapping("/{idFeedback}")
    fun atualizarFeedback(
        @PathVariable idFeedback: Int,
        @RequestBody novoFeedback: Feedback
    ): ResponseEntity<Feedback> {
        val feedbackAtualizado = feedbackService.atualizarFeedback(idFeedback, novoFeedback)
        return if (feedbackAtualizado != null) {
            ResponseEntity.ok(feedbackAtualizado)
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @GetMapping("/rating/oportunidade/{idOportunidade}")
    fun getRatingPorOportunidade(@PathVariable idOportunidade: Int): ResponseEntity<Double> {
        val rating = feedbackService.obterRatingPorOportunidade(idOportunidade)
        return ResponseEntity.ok(rating)
    }

    @GetMapping("/media")
    fun calcularMediaRatingPorMes(
        @RequestParam mes: Int
    ): ResponseEntity<Double> {
        if (mes < 1 || mes > 12) {
            return ResponseEntity.badRequest().body(null)
        }
        val media = feedbackService.calcularMediaRatingPorMes(mes)
        return ResponseEntity.ok(media)
    }
}