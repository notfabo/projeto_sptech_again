package api.againrest.models

import com.fasterxml.jackson.annotation.JsonFormat
import java.time.LocalDateTime
import java.time.OffsetDateTime
import java.time.ZonedDateTime
import javax.persistence.*

@Entity
@Table(name = "feedback")
class Feedback {

    @Column(name = "id_feedback")
    @field:Id
    @field:GeneratedValue(strategy = GenerationType.IDENTITY)
    var idFeedback:Int = 0

    @Column(name = "rating_feedback")
    var ratingFeedback:Int? = null

    @Column(name = "comentario_feedback")
    var comentarioFeedback:String? = null

    @Column(name = "motivo_feedback")
    var motivoFeedback:String? = null

    @Column(name = "objetivo_feedback")
    var objetivoFeedback:String? = null

    @Column(name = "estrategia_feedback")
    var estrategiaFeedback:String? = null

    @Column(name = "data_feedback")
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX")
    var dataFeedback: OffsetDateTime? = null

    @ManyToOne
    @JoinColumn(name = "fk_oportunidade", referencedColumnName = "id_oportunidade")
    var oportunidade: Oportunidade? = null

    @Column(name = "autor_tipo")
    @Enumerated(EnumType.STRING)
    var autorTipo: AutorTipo? = null

    @ManyToOne
    @JoinColumn(name = "fk_autor", referencedColumnName = "id_gerente", insertable = false, updatable = false)
    var gerente: Gerente? = null

    @ManyToOne
    @JoinColumn(name = "fk_autor", referencedColumnName = "id_vendedor", insertable = false, updatable = false)
    var vendedor: Vendedor? = null


    @Column(name = "fk_autor")
    var fkAutor: Int? = null

    enum class AutorTipo {
        vendedor,
        gerente
    }
}