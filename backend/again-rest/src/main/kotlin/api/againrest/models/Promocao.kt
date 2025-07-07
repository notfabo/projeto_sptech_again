package api.againrest.models

import java.util.*
import javax.persistence.*
import javax.validation.constraints.Size

@Entity
@Table(name = "promocao")
class Promocao {

    @Column(name = "id_promocao")
    @field:Id
    @field:GeneratedValue(strategy = GenerationType.IDENTITY)
    var idPromocao:Int = 0

    @Column(name = "titulo")
    @field:Size(min = 3, max = 100)
    var titulo:String? = null

    @Column(name = "descricao")
    var descricao:String? = null

    @Column(name = "utilizacao")
    var utilizacao:String? = null

    @Column(name = "desconto")
    var desconto:Int? = 0

    @Column(name = "validade")
    var validade: Date? = null

}