package api.againrest.repositories

import api.againrest.models.Produto
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param

interface ProdutoRepository: JpaRepository<Produto, Int> {

    @Query("""
        SELECT 
            p.id_produto, 
            p.nome, 
            p.preco, 
            p.descricao, 
            p.categoria, 
            p.geracao,
            MAX(c.data_compra) AS ultima_compra
        FROM 
            vendedor_produto vp
        JOIN 
            produto p ON vp.fk_produto = p.id_produto
        LEFT JOIN 
            compra c ON c.fk_produto = p.id_produto
        WHERE 
            vp.fk_vendedor = :vendedorId
        GROUP BY 
            p.id_produto, p.nome, p.preco, p.descricao, p.categoria, p.geracao
    """, nativeQuery = true)
    fun findProdutosByVendedorId(@Param("vendedorId") vendedorId: Int): List<Array<Any>>

    @Query("""
    SELECT 
        p.id_produto, 
        p.nome, 
        p.preco, 
        p.descricao, 
        p.categoria, 
        p.geracao,
        MAX(c.data_compra) AS ultima_compra
    FROM 
        vendedor v
    JOIN 
        vendedor_produto vp ON v.id_vendedor = vp.fk_vendedor
    JOIN 
        produto p ON vp.fk_produto = p.id_produto
    LEFT JOIN 
        compra c ON c.fk_produto = p.id_produto
    WHERE 
        v.fk_gerente = :gerenteId
    GROUP BY 
        p.id_produto, p.nome, p.preco, p.descricao, p.categoria, p.geracao
""", nativeQuery = true)
    fun findProdutosByGerenteId(@Param("gerenteId") gerenteId: Int): List<Array<Any>>
}
