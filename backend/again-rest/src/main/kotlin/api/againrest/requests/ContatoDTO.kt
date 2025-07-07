package api.againrest.requests

import com.fasterxml.jackson.annotation.JsonFormat

data class ContatoDTO(
    val idContato: Int?,
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm")
    val contatoDataHora: String,
    val motivo: String,
    val fkRepresentante: Int?,
    val fkCompra: Int?,
    val nomeRepresentante: String?,
    val nomeCliente: String?,
    val nomeProduto: String?

)