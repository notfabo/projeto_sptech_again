package api.againrest.models

import javax.persistence.*
import javax.validation.constraints.Size

@Entity
@Table(name = "representante")
class Representante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_representante")
    var idRepresentante:Int = 0

    @Column(name = "nome")
    var nome:String? = null

    @Column(name = "telefone")
    var telefone:String? = null

    @Column(name = "email")
    @field:Size(min = 10, max = 50)
    var email:String? = null

}