package api.againrest.models

import com.fasterxml.jackson.annotation.JsonFormat
import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "oportunidade")
class Oportunidade{
    @Column(name = "id_oportunidade")
    @field:Id
    @field:GeneratedValue(strategy = GenerationType.IDENTITY)
    var idOportunidade:Int = 0

    @Column(name = "vendedor")
    var vendedorOp:String? = null

    @Column(name = "produto")
    var produto:String? = null

    @Column(name = "cliente")
    var cliente:String? = null

    @Column(name = "motivo")
    var motivo:String? = null

    @Column(name = "objetivo")
    var objetivo:String? = null

    @Column(name = "plano_de_acao")
    var planoDeAcao:String? = null

    @Column(name = "cost")
    var custo:Double? = null

    @Column(name = "data_criacao")
    @JsonFormat(pattern = "dd/MM/yyyy - HH:mm")
    var dataHora: LocalDateTime? = null
}
