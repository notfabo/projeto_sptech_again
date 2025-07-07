package api.againrest.repositories

import api.againrest.models.Vendedor
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.stereotype.Repository
import org.springframework.web.bind.annotation.CrossOrigin
import java.util.*

@Repository
@RepositoryRestResource(path = "vendedores")
interface VendedorRepository: JpaRepository<Vendedor, Int> {

    fun findByEmail(email: String?): Optional<Vendedor>

    fun findByGerenteIdGerente(gerenteId: Int): List<Vendedor>

}