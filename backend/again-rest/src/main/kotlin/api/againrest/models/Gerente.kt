package api.againrest.models

import javax.persistence.*
import javax.validation.constraints.Email
import javax.validation.constraints.NotBlank
import javax.validation.constraints.Size

@Entity
@Table(name = "gerente")
class Gerente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_gerente")
    var idGerente: Int = 0

    @Column(name = "nome")
    @field:Size(min = 3, max = 45)
    var nome:String? = null

    @Column(name = "email")
    @field:Email @field:Size(min = 10, max = 50)
    var email:String? = null

    @Column(name = "senha")
    @field:Size(min = 8, max = 30)
    var senha:String? = null

//    @Column(name = "autenticado")
//    var autenticado:Boolean = true
}