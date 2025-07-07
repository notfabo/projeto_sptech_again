package api.againrest.repositories

import api.againrest.models.Gerente
import api.againrest.models.Vendedor
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.data.rest.core.annotation.RestResource
import org.springframework.stereotype.Repository
import org.springframework.web.bind.annotation.CrossOrigin
import java.util.*

@Repository
@RepositoryRestResource(path = "gerentes")
interface GerenteRepository: JpaRepository<Gerente, Int> {

    fun findByEmail(email: String?): Optional<Gerente>

}