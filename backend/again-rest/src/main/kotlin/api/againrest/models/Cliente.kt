package api.againrest.models

import java.time.LocalDate
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "cliente")
class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cliente")
    var idCliente: Int = 0

    @Column(name = "nome")
    var nome: String? = null

    @Column(name = "cnpj")
    var cnpj: Long? = null

    @Column(name = "embarque")
    var embarque: LocalDate? = null

    @Column(name = "area")
    var area: String? = null

    @OneToOne
    @JoinColumn(name = "fk_representante", referencedColumnName = "id_representante")
    var representante: Representante? = null

    @ManyToOne
    @JoinColumn(name = "fk_vendedor", referencedColumnName = "id_vendedor")
    var vendedor: Vendedor? = null
}