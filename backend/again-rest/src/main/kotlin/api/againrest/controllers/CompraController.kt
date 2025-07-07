package api.againrest.controllers

import api.againrest.requests.CompraDetailsDTO
import api.againrest.services.CompraService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/compras")
class CompraController(
    val compraService: CompraService
) {

    // GET 4
    @GetMapping("/produtos")
    fun getDistinctProdutos(): ResponseEntity<List<String>> {
        val produtos = compraService.getDistinctProdutos()
        return ResponseEntity.ok(produtos)
    }

    @GetMapping("/vendedor/{vendedorId}")
    fun getComprasByVendedorId(@PathVariable vendedorId: Int): ResponseEntity<List<CompraDetailsDTO>> {
        val compras = compraService.getComprasByVendedorId(vendedorId)
        return ResponseEntity.ok(compras)
    }

    @GetMapping("/cliente/{clienteNome}")
    fun getComprasByClienteNome(@PathVariable clienteNome: String): ResponseEntity<List<CompraDetailsDTO>> {
        val compras = compraService.getComprasByClienteNome(clienteNome)
        return ResponseEntity.ok(compras)
    }

    @GetMapping("/gerente/{gerenteId}")
    fun getComprasByGerenteId(@PathVariable gerenteId: Int): ResponseEntity<List<CompraDetailsDTO>> {
        val compras = compraService.getComprasByGerenteId(gerenteId)
        return ResponseEntity.ok(compras)
    }

    @GetMapping("/gerente/{gerenteId}/vendas")
    fun countVendasByGerenteIdAndMonth(
        @PathVariable gerenteId: Int,
        @RequestParam mes: Int
    ): ResponseEntity<Int> {
        val totalVendas = compraService.countVendasByGerenteIdAndMonth(gerenteId, mes)
        return ResponseEntity.ok(totalVendas)
    }

    @GetMapping("/maisVendidos/mes/{mes}")
    fun getProdutosMaisVendidosPorMes(@PathVariable mes: Int): ResponseEntity<List<Pair<String, Long>>> {
        val produtosMaisVendidos = compraService.listarProdutosMaisVendidosPorMes(mes)
        return if (produtosMaisVendidos.isNotEmpty()) {
            ResponseEntity.ok(produtosMaisVendidos)
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @GetMapping("/vendas/ano/{ano}")
    fun getVendasPorMesNoAno(@PathVariable ano: Int): ResponseEntity<List<Pair<Int, Long>>> {
        val vendasPorMes = compraService.listarVendasPorMesNoAno(ano)
        return if (vendasPorMes.isNotEmpty()) {
            ResponseEntity.ok(vendasPorMes)
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @GetMapping("/vendas/mes/{mes}/area")
    fun getVendasPorMesEArea(@PathVariable mes: Int): ResponseEntity<List<Triple<String, Int, Long>>> {
        val vendasPorMesEArea = compraService.listarVendasPorMesEArea(mes)
        return if (vendasPorMesEArea.isNotEmpty()) {
            ResponseEntity.ok(vendasPorMesEArea)
        } else {
            ResponseEntity.notFound().build()
        }
    }

}