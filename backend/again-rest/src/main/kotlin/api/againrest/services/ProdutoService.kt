package api.againrest.services

import api.againrest.repositories.ProdutoRepository
import api.againrest.requests.ProdutoDTO
import org.springframework.stereotype.Service
import java.math.BigDecimal
import java.util.Date

@Service
class ProdutoService(
    val produtoRepository: ProdutoRepository
) {

    fun getProdutosByVendedorId(vendedorId: Int): List<ProdutoDTO> {
        val results = produtoRepository.findProdutosByVendedorId(vendedorId)
        return results.map { result ->
            ProdutoDTO(
                idProduto = result[0] as Int,
                nome = result[1] as String,
                preco = (result[2] as BigDecimal).toDouble(),
                descricao = result[3] as String,
                categoria = result[4] as String,
                geracao = result[5] as String,
                ultimaCompra = result[6] as? Date
            )
        }
    }

    fun getProdutosByGerenteId(gerenteId: Int): List<ProdutoDTO> {
        val results = produtoRepository.findProdutosByGerenteId(gerenteId)
        return results.map { result ->
            ProdutoDTO(
                idProduto = result[0] as Int,
                nome = result[1] as String,
                preco = (result[2] as BigDecimal).toDouble(),
                descricao = result[3] as String,
                categoria = result[4] as String,
                geracao = result[5] as String,
                ultimaCompra = result[6] as? Date
            )
        }
    }

}