package api.againrest.repositories

import api.againrest.models.Compra
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.stereotype.Repository
import org.springframework.web.bind.annotation.CrossOrigin

@Repository
@RepositoryRestResource(path = "compras")
interface CompraRepository: JpaRepository<Compra, Int> {

    fun findByVendedorGerenteIdGerente(gerenteId: Int): List<Compra>

    @Query("""
        SELECT DISTINCT p.nome
        FROM compra c
        JOIN produto p ON c.fk_produto = p.id_produto
    """, nativeQuery = true)
    fun findDistinctProdutos(): List<String>


    @Query("""
        SELECT c.id_compra, c.quantidade, c.valor, c.data_compra,
               p.id_produto, p.nome AS produto_nome, p.preco AS produto_preco, p.descricao AS produto_descricao, p.categoria AS produto_categoria, p.geracao AS produto_geracao,
               cl.id_cliente, cl.nome AS cliente_nome, cl.cnpj, cl.embarque, cl.area,
               r.nome AS representante_nome,
               pr.id_promocao, pr.titulo AS promocao_titulo, pr.descricao AS promocao_descricao, pr.utilizacao, pr.desconto, pr.validade
        FROM compra c
        JOIN produto p ON c.fk_produto = p.id_produto
        JOIN cliente cl ON c.fk_cliente = cl.id_cliente
        JOIN representante r ON cl.fk_representante = r.id_representante
        LEFT JOIN compra_promocao cp ON c.id_compra = cp.fk_compra
        LEFT JOIN promocao pr ON cp.fk_promocao = pr.id_promocao
        WHERE c.fk_vendedor = :vendedorId
    """, nativeQuery = true)
    fun findComprasByVendedorId(@Param("vendedorId") vendedorId: Int): List<Array<Any>>

    @Query("""
    SELECT c.id_compra, c.quantidade, c.valor, c.data_compra,
           p.id_produto, p.nome AS produto_nome, p.preco AS produto_preco, p.descricao AS produto_descricao, p.categoria AS produto_categoria, p.geracao AS produto_geracao,
           cl.id_cliente, cl.nome AS cliente_nome, cl.cnpj, cl.embarque, cl.area,
           r.nome AS representante_nome,
           pr.id_promocao, pr.titulo AS promocao_titulo, pr.descricao AS promocao_descricao, pr.utilizacao, pr.desconto, pr.validade
    FROM compra c
    JOIN produto p ON c.fk_produto = p.id_produto
    JOIN cliente cl ON c.fk_cliente = cl.id_cliente
    JOIN representante r ON cl.fk_representante = r.id_representante
    LEFT JOIN compra_promocao cp ON c.id_compra = cp.fk_compra
    LEFT JOIN promocao pr ON cp.fk_promocao = pr.id_promocao
    WHERE cl.nome = :clienteNome
""", nativeQuery = true)
    fun findComprasByClienteNome(@Param("clienteNome") clienteNome: String): List<Array<Any>>

    @Query("""
    SELECT c.id_compra, c.quantidade, c.valor, c.data_compra,
           p.id_produto, p.nome AS produto_nome, p.preco AS produto_preco, p.descricao AS produto_descricao, p.categoria AS produto_categoria, p.geracao AS produto_geracao,
           cl.id_cliente, cl.nome AS cliente_nome, cl.cnpj, cl.embarque, cl.area,
           r.nome AS representante_nome,
           pr.id_promocao, pr.titulo AS promocao_titulo, pr.descricao AS promocao_descricao, pr.utilizacao, pr.desconto, pr.validade,
           v.id_vendedor, v.nome AS vendedor_nome, g.id_gerente, g.nome AS gerente_nome
    FROM compra c
    JOIN produto p ON c.fk_produto = p.id_produto
    JOIN cliente cl ON c.fk_cliente = cl.id_cliente
    JOIN representante r ON cl.fk_representante = r.id_representante
    JOIN vendedor v ON c.fk_vendedor = v.id_vendedor
    JOIN gerente g ON v.fk_gerente = g.id_gerente
    LEFT JOIN compra_promocao cp ON c.id_compra = cp.fk_compra
    LEFT JOIN promocao pr ON cp.fk_promocao = pr.id_promocao
    WHERE g.id_gerente = :gerenteId
""", nativeQuery = true)
    fun findComprasByGerenteId(@Param("gerenteId") gerenteId: Int): List<Array<Any>>

    @Query("""
    SELECT COUNT(c.id_compra) 
    FROM compra c
    JOIN vendedor v ON c.fk_vendedor = v.id_vendedor
    JOIN gerente g ON v.fk_gerente = g.id_gerente
    WHERE g.id_gerente = :gerenteId
      AND MONTH(c.data_compra) = :mes
      AND YEAR(c.data_compra) = 2024
""", nativeQuery = true)
    fun countVendasByGerenteIdAndMonth(
        @Param("gerenteId") gerenteId: Int,
        @Param("mes") mes: Int
    ): Int

    @Query("""
    SELECT p.nome, SUM(c.quantidade) as totalVendas
    FROM Compra c
    JOIN c.produto p
    WHERE YEAR(c.dataCompra) = 2024
      AND MONTH(c.dataCompra) = :mes
    GROUP BY p.nome
    ORDER BY totalVendas DESC
""")
    fun findProdutosMaisVendidosPorMes(@Param("mes") mes: Int): List<Array<Any>>

    @Query("""
    SELECT MONTH(c.dataCompra), SUM(c.quantidade)
    FROM Compra c
    WHERE YEAR(c.dataCompra) = :ano
    GROUP BY MONTH(c.dataCompra)
    ORDER BY MONTH(c.dataCompra)
""")
    fun findVendasPorMesNoAno(@Param("ano") ano: Int): List<Array<Any>>

    @Query("""
    SELECT c.area, MONTH(co.dataCompra), SUM(co.quantidade)
    FROM Compra co
    JOIN co.cliente c
    WHERE YEAR(co.dataCompra) = 2024
      AND MONTH(co.dataCompra) = :mes
    GROUP BY c.area, MONTH(co.dataCompra)
    ORDER BY SUM(co.quantidade) DESC
""")
    fun findVendasPorMesEArea(@Param("mes") mes: Int): List<Array<Any>>



}