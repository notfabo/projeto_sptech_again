package api.againrest.requests

import com.fasterxml.jackson.annotation.JsonFormat
import java.util.Date

data class ProdutoDTO(
    val idProduto: Int,
    val nome: String,
    val preco: Double,
    val descricao: String,
    val categoria: String,
    val geracao: String,
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    val ultimaCompra: Date?
)