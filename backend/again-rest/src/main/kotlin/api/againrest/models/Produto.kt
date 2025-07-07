package api.againrest.models

import javax.persistence.*
import javax.validation.constraints.Email
import javax.validation.constraints.Size

@Entity
@Table(name = "produto")
class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_produto")
    var idProduto:Int = 0

    @Column(name = "nome")
    @field:Size(min = 3, max = 100)
    var nome:String? = null

    @Column(name = "preco")
    var preco:Double = 0.0

    @Column(name = "descricao")
    var descricao:String? = null

    @Column(name = "categoria")
    var categoria:String? = null

    @Column(name = "geracao")
    var geracao:String? = null
}