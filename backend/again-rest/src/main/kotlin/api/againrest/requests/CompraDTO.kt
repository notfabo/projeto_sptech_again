package api.againrest.requests

import com.fasterxml.jackson.annotation.JsonFormat
import java.util.*

data class CompraDTO(
    val fkCompra: Int?,
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    val compraDataCompra: Date?
)