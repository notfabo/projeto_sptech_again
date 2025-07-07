package api.againrest.requests

import api.againrest.models.Oportunidade
import java.time.format.DateTimeFormatter

data class OportunidadeDTO(
    val idOportunidade: Int,
    val vendedorOp: String?,
    val dataCriacaoFormatada: String // Formato customizado para JSON
)
