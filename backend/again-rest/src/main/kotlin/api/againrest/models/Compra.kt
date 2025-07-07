package api.againrest.models

import java.util.*
import javax.persistence.*

@Entity
@Table(name = "compra")
class Compra {

    @Column(name = "id_compra")
    @field:Id
    @field:GeneratedValue(strategy = GenerationType.IDENTITY)
    var idCompra:Int? = 0

    @Column(name = "quantidade")
    var quantidade:Int? = null

    @Column(name = "valor")
    var valor:Double = 0.0

    @Column(name = "data_compra")
    var dataCompra: Date? = null

    @OneToOne
    @JoinColumn(name = "fk_produto", referencedColumnName = "id_produto")
    var produto: Produto? = null

    @OneToOne
    @JoinColumn(name = "fk_vendedor", referencedColumnName = "id_vendedor")
    var vendedor: Vendedor? = null

    @OneToOne
    @JoinColumn(name = "fk_cliente", referencedColumnName = "id_cliente")
    var cliente: Cliente? = null
}