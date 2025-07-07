package api.againrest.models

import javax.persistence.*

@Entity
@Table(name = "vendedor_cliente")
data class VendedorCliente(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_vendedor_cliente")
    val id: Int,

    @Column(name = "fk_vendedor")
    val fkVendedor: Int,

    @Column(name = "fk_cliente")
    val fkCliente: Int
)