package api.againrest.models

import java.time.LocalDateTime
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "contato")
data class Contato(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_contato")
    val id: Int,

    @Column(name = "data_hora")
    val dataHora: LocalDateTime,

    @Column(name = "motivo")
    val motivo: String?,

    @Column(name = "fk_representante")
    val fkRepresentante: Int?,

    @Column(name = "fk_compra")
    val fkCompra: Int?
)