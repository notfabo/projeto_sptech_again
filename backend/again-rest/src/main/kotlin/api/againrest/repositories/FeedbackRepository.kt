package api.againrest.repositories

import api.againrest.models.Feedback
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.stereotype.Repository

@Repository
@RepositoryRestResource(path = "feedbacks")
interface FeedbackRepository: JpaRepository<Feedback, Int>
{
    @Query("""
    SELECT f FROM Feedback f 
    LEFT JOIN FETCH f.gerente g 
    LEFT JOIN FETCH f.vendedor v 
    WHERE f.oportunidade.idOportunidade = :idOportunidade
""")
    fun findByOportunidade(@Param("idOportunidade") idOportunidade: Int): List<Feedback>


    @Query("""
    SELECT f FROM Feedback f 
    WHERE f.autorTipo = :autorTipo 
    AND f.fkAutor = :autorId
""")
    fun findByAutor(
        @Param("autorTipo") autorTipo: Feedback.AutorTipo,
        @Param("autorId") autorId: Int
    ): List<Feedback>

    @Query("""
    SELECT COALESCE(AVG(f.ratingFeedback), 0) 
    FROM Feedback f 
    WHERE f.oportunidade.idOportunidade = :idOportunidade
""")
    fun calcularRatingPorOportunidade(@Param("idOportunidade") idOportunidade: Int): Double

    @Query("""
        SELECT COALESCE(AVG(f.ratingFeedback), 0) 
        FROM Feedback f 
        WHERE MONTH(f.dataFeedback) = :mes
          AND YEAR(f.dataFeedback) = 2024
    """)
    fun calcularMediaPorMes(
        @Param("mes") mes: Int
    ): Double

}