package api.againrest.models

import javax.persistence.*

@Entity
@Table(name = "cliente_contato")
data class ClienteContato(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cliente_contato")
    val id: Int,

    @Column(name = "fk_cliente")
    val fkCliente: Int,

    @Column(name = "fk_contato")
    val fkContato: Int
)