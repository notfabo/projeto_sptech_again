package api.againrest.controllers

import api.againrest.requests.ProdutoDTO
import api.againrest.services.ProdutoService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/produtos")
class ProdutoController(
    val produtoService: ProdutoService
) {

    // GET 5
    @GetMapping("/vendedor/{vendedorId}")
    fun getProdutosByVendedorId(@PathVariable vendedorId: Int): ResponseEntity<List<ProdutoDTO>> {
        val produtos = produtoService.getProdutosByVendedorId(vendedorId)
        return ResponseEntity.ok(produtos)
    }

    @GetMapping("/gerente/{gerenteId}")
    fun getProdutosByGerenteId(@PathVariable gerenteId: Int): ResponseEntity<List<ProdutoDTO>> {
        val produtos = produtoService.getProdutosByGerenteId(gerenteId)
        return ResponseEntity.ok(produtos)
    }
}