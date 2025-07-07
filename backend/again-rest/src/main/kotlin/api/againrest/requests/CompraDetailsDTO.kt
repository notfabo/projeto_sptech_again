package api.againrest.requests

import com.fasterxml.jackson.annotation.JsonFormat
import java.util.*

data class CompraDetailsDTO(
    val idCompra: Int,
    val quantidade: Int,
    val valor: Double,
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    val dataCompra: Date,
    val produtoNome: String,
    val clienteNome: String,
    val promocaoTitulo: String?,
    val desconto: Int?
)
