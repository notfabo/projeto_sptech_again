package api.againrest.repositories

import api.againrest.models.Cliente
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.stereotype.Repository
import org.springframework.web.bind.annotation.CrossOrigin

@Repository
@RepositoryRestResource(path = "clientes")
interface ClienteRepository: JpaRepository<Cliente, Int> {

    @Query("""
        SELECT c FROM Cliente c
        JOIN VendedorCliente vc ON c.idCliente = vc.fkCliente
        JOIN Vendedor v ON vc.fkVendedor = v.idVendedor
        WHERE v.gerente.idGerente = :gerenteId
    """)
    fun findByVendedorGerenteIdGerente(@Param("gerenteId") gerenteId: Int): List<Cliente>

    @Query("""
        SELECT c.id_cliente, 
               c.nome AS cliente_nome, 
               c.cnpj, 
               c.embarque, 
               c.area, 
               r.nome AS representante_nome, 
               cc.fk_contato, 
               ct.data_hora AS contato_data_hora, 
               cp.id_compra AS fk_compra, 
               cp.data_compra AS compra_data_compra
        FROM vendedor_cliente vc
        JOIN cliente c ON vc.fk_cliente = c.id_cliente
        JOIN representante r ON c.fk_representante = r.id_representante
        LEFT JOIN cliente_contato cc ON c.id_cliente = cc.fk_cliente
        LEFT JOIN contato ct ON cc.fk_contato = ct.id_contato
        LEFT JOIN compra cp ON c.id_cliente = cp.fk_cliente AND cp.fk_vendedor = vc.fk_vendedor
        WHERE vc.fk_vendedor = :vendedorId
    """, nativeQuery = true)
    fun findClientesByVendedorId(@Param("vendedorId") vendedorId: Int): List<Array<Any>>

    @Query("""
        SELECT DISTINCT c.area
        FROM cliente c
    """, nativeQuery = true)
    fun findDistinctAreas(): List<String>

    @Query("""
    SELECT v.id_vendedor
    FROM vendedor v
    WHERE v.fk_gerente = :gerenteId
""", nativeQuery = true)
    fun findVendedoresByGerenteId(@Param("gerenteId") gerenteId: Int): List<Int>



}