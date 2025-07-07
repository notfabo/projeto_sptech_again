package api.againrest.repositories

import api.againrest.models.Oportunidade
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.stereotype.Repository
import org.springframework.web.bind.annotation.CrossOrigin

@Repository
@RepositoryRestResource(path = "oportunidades")
interface OportunidadeRepository: JpaRepository<Oportunidade, Int> {

    @Query("SELECT o FROM Oportunidade o WHERE o.vendedorOp = :vendedor ORDER BY o.dataHora DESC")
    fun findByVendedor(@Param("vendedor") vendedor: String): List<Oportunidade>

    @Query("SELECT o FROM Oportunidade o WHERE o.cliente = :cliente ORDER BY o.dataHora DESC")
    fun findByCliente(@Param("cliente") cliente: String): List<Oportunidade>

    @Query("""
    SELECT o 
    FROM Oportunidade o 
    WHERE o.vendedorOp IN (
        SELECT v.nome FROM Vendedor v WHERE v.gerente.idGerente = :gerenteId
    )
    ORDER BY o.dataHora DESC
    """)
    fun findOportunidadesByGerenteId(@Param("gerenteId") gerenteId: Int): List<Oportunidade>

    @Query("""
    SELECT o 
    FROM Oportunidade o 
    WHERE o.vendedorOp IN (
        SELECT v.nome FROM Vendedor v WHERE v.gerente.idGerente = :gerenteId
    )
    ORDER BY o.dataHora DESC
""")
    fun findUltimaOportunidadePorGerenteId(@Param("gerenteId") gerenteId: Int): List<Oportunidade>


    @Query("""
    SELECT COUNT(o)
    FROM Oportunidade o
    WHERE YEAR(o.dataHora) = 2024
      AND MONTH(o.dataHora) = :mes
      AND o.vendedorOp IN (
          SELECT v.nome FROM Vendedor v WHERE v.gerente.idGerente = :gerenteId
      )
""")
    fun contarOportunidadesPorGerenteEMes(
        @Param("gerenteId") gerenteId: Int,
        @Param("mes") mes: Int
    ): Long


    @Query("""
        SELECT MONTH(o.dataHora) AS mes, SUM(o.custo) AS totalCusto
        FROM Oportunidade o
        WHERE YEAR(o.dataHora) = 2024
          AND o.vendedorOp IN (
              SELECT v.nome FROM Vendedor v WHERE v.gerente.idGerente = :gerenteId
          )
        GROUP BY MONTH(o.dataHora)
    """)
    fun somaCustoPorGerenteAno2024(
        @Param("gerenteId") gerenteId: Int
    ): List<Array<Any>>






}