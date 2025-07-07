package api.againrest.repositories

import api.againrest.models.Cliente
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param

interface PerfilRepository : JpaRepository<Cliente, Int> {

    @Query("""
SELECT 
    c.id_cliente AS cliente_id, 
    c.nome AS cliente_nome, 
    c.cnpj, 
    r.nome AS representante_nome, 
    r.email AS representante_email, 
    r.telefone AS representante_telefone, 
    MAX(cp.data_compra) AS ultima_compra_data, 
    COUNT(cp.id_compra) AS total_compras, 
    GROUP_CONCAT(p.nome SEPARATOR ', ') AS produtos_comprados
FROM 
    cliente c 
JOIN 
    representante r ON c.fk_representante = r.id_representante 
JOIN 
    compra cp ON c.id_cliente = cp.fk_cliente 
JOIN 
    produto p ON cp.fk_produto = p.id_produto 
WHERE 
    c.nome = :clienteNome 
GROUP BY 
    c.id_cliente, c.nome, c.cnpj, r.nome, r.email, r.telefone
    """, nativeQuery = true)
    fun findPerfilByClienteNome(@Param("clienteNome") clienteNome: String): List<Any>
}
