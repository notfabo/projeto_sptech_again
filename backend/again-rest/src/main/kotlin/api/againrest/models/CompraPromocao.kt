package api.againrest.models

import javax.persistence.*

@Entity
@Table(name = "compra_promocao")
class CompraPromocao {

    @Column(name = "id_compra_promocao")
    @field:Id
    @field:GeneratedValue(strategy = GenerationType.IDENTITY)
    var idCompraPromocao:Int = 0

    @OneToOne
    @JoinColumn(name = "fk_compra", referencedColumnName = "id_compra")
    var compra: Compra? = null

    @OneToOne
    @JoinColumn(name = "fk_promocao", referencedColumnName = "id_promocao")
    var promocao: Promocao? = null
}