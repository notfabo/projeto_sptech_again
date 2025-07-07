package api.againrest.requests

import com.fasterxml.jackson.annotation.JsonFormat
import java.util.*

data class ClienteDTO(
    val idCliente: Int,
    val clienteNome: String,
    val cnpj: String,
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    val embarque: Date,
    val area: String,
    val representanteNome: String,
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    var latestContatoData: Date? = null,
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    var latestCompraData: Date? = null
)
