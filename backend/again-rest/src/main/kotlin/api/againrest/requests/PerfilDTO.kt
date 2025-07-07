package api.againrest.requests

import com.fasterxml.jackson.annotation.JsonFormat
import java.util.Date

data class PerfilDTO (
    val idCliente: Int,
    val clienteNome: String,
    val cnpj: String,
    val representanteNome: String,
    val representanteEmail: String,
    val representanteTelefone: String,
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    val latestCompraData: Date? = null,
    val quantidadeCompras: Int,
    val produtosComprados: List<String>
)