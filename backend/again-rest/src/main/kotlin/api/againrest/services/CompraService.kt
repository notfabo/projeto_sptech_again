package api.againrest.services

import api.againrest.repositories.CompraRepository
import api.againrest.requests.*
import org.springframework.stereotype.Service
import java.math.BigDecimal
import java.util.*

@Service
class CompraService(
    val compraRepository: CompraRepository
) {

    fun getDistinctProdutos(): List<String> {
        return compraRepository.findDistinctProdutos()
    }


    fun getComprasByVendedorId(vendedorId: Int): List<CompraDetailsDTO> {
        val results = compraRepository.findComprasByVendedorId(vendedorId)
        return results.map { result ->
            CompraDetailsDTO(
                idCompra = result[0] as Int,
                quantidade = result[1] as Int,
                valor = (result[2] as BigDecimal).toDouble(),
                dataCompra = result[3] as Date,
                produtoNome = result[5] as String,
                clienteNome = result[11] as String,
                promocaoTitulo = if (result[16] != null) result[17] as String else null,
                desconto = if (result[16] != null) result[20] as Int else null
            )
        }
    }

    fun getComprasByClienteNome(clienteNome: String): List<CompraDetailsDTO> {
        val results = compraRepository.findComprasByClienteNome(clienteNome)
        return results.map { result ->
            CompraDetailsDTO(
                idCompra = result[0] as Int,
                quantidade = result[1] as Int,
                valor = (result[2] as BigDecimal).toDouble(),
                dataCompra = result[3] as Date,
                produtoNome = result[5] as String,
                clienteNome = result[11] as String,
                promocaoTitulo = if (result[16] != null) result[17] as String else null,
                desconto = if (result[16] != null) result[20] as Int else null
            )
        }
    }

    fun getComprasByGerenteId(gerenteId: Int): List<CompraDetailsDTO> {
        val results = compraRepository.findComprasByGerenteId(gerenteId)
        return results.map { result ->
            CompraDetailsDTO(
                idCompra = result[0] as Int,
                quantidade = result[1] as Int,
                valor = (result[2] as BigDecimal).toDouble(),
                dataCompra = result[3] as Date,
                produtoNome = result[5] as String,
                clienteNome = result[11] as String,
                promocaoTitulo = if (result.size > 17 && result[17] != null) result[17] as String else null,
                desconto = if (result.size > 20 && result[20] != null) result[20] as Int else null
            )
        }
    }

    fun countVendasByGerenteIdAndMonth(gerenteId: Int, mes: Int): Int {
        return compraRepository.countVendasByGerenteIdAndMonth(gerenteId, mes)
    }

    fun listarProdutosMaisVendidosPorMes(mes: Int): List<Pair<String, Long>> {
        val resultados = compraRepository.findProdutosMaisVendidosPorMes(mes)
        return resultados.map { Pair(it[0] as String, it[1] as Long) }
    }

    fun listarVendasPorMesNoAno(ano: Int): List<Pair<Int, Long>> {
        val resultados = compraRepository.findVendasPorMesNoAno(ano)
        return resultados.map { Pair(it[0] as Int, it[1] as Long) }
    }

    fun listarVendasPorMesEArea(mes: Int): List<Triple<String, Int, Long>> {
        val resultados = compraRepository.findVendasPorMesEArea(mes)
        return resultados.map { Triple(it[0] as String, it[1] as Int, it[2] as Long) }
    }



}