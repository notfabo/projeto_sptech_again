package api.againrest.repositories

import api.againrest.models.Contato
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.stereotype.Repository
import org.springframework.web.bind.annotation.CrossOrigin


@Repository
@RepositoryRestResource(path = "contatos")
interface ContatoRepository : JpaRepository<Contato, Int> {

    @Query("""
    SELECT c FROM Contato c
    JOIN ClienteContato cc ON c.id = cc.fkContato
    JOIN Cliente cl ON cc.fkCliente = cl.idCliente
    JOIN VendedorCliente vc ON cl.idCliente = vc.fkCliente
    WHERE vc.fkVendedor = :vendedorId
""")
    fun findContatosByVendedorId(@Param("vendedorId") vendedorId: Int): List<Contato>

    @Query("""
    SELECT c FROM Contato c
    JOIN ClienteContato cc ON c.id = cc.fkContato
    JOIN Cliente cl ON cc.fkCliente = cl.idCliente
    WHERE cl.nome = :clienteNome
""")
    fun findContatosByClienteNome(@Param("clienteNome") clienteNome: String): List<Contato>

    @Query("""
    SELECT c FROM Contato c
    JOIN ClienteContato cc ON c.id = cc.fkContato
    JOIN Cliente cl ON cc.fkCliente = cl.idCliente
    JOIN VendedorCliente vc ON cl.idCliente = vc.fkCliente
    JOIN Vendedor v ON vc.fkVendedor = v.idVendedor
    WHERE v.gerente.idGerente = :gerenteId
""")
    fun findContatosByGerenteId(@Param("gerenteId") gerenteId: Int): List<Contato>


}