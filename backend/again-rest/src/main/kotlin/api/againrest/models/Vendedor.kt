package api.againrest.models

import javax.persistence.*
import javax.validation.constraints.Email
import javax.validation.constraints.NotBlank
import javax.validation.constraints.Size

@Entity
@Table(name = "vendedor")
class Vendedor{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_vendedor")
    var idVendedor: Int = 0

    @Column(name = "nome")
    @field:Size(min = 3, max = 45)
    var nome:String? = null

    @Column(name = "email")
    @field:NotBlank @field:Size(min = 10, max = 50)
    var email:String? = null

    @Column(name = "senha")
    @field:Size(min = 8, max = 30)
    var senha:String? = null

    @Column(name = "aprovado")
    var aprovado:Boolean = true

    @ManyToOne
    @JoinColumn(name = "fk_gerente", referencedColumnName = "id_gerente")
    var gerente: Gerente? = null

    @OneToMany(mappedBy = "vendedor")
    var clientes: List<Cliente> = mutableListOf()
}