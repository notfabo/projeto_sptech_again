package api.againrest.requests

import com.fasterxml.jackson.annotation.JsonFormat
import java.util.*

data class PromocaoDTO(
    val idPromocao: Int,
    val titulo: String,
    val descricao: String,
    val utilizacao: String,
    val desconto: Int,
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    val validade: Date?,
)