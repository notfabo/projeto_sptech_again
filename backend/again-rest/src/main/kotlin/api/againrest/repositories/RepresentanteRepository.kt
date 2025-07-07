package api.againrest.repositories

import api.againrest.models.Representante
import org.springframework.data.jpa.repository.JpaRepository

interface RepresentanteRepository : JpaRepository<Representante, Int>
