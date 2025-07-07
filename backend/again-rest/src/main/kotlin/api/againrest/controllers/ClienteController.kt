package api.againrest.controllers

import api.againrest.requests.ClienteDTO
import api.againrest.services.ClienteService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/clientes")
class ClienteController(
    val clienteService: ClienteService
) {
    //GET 1
    @GetMapping("/vendedor/{vendedorId}")
    fun getClientesByVendedorId(@PathVariable vendedorId: Int): ResponseEntity<List<ClienteDTO>> {
        val clientes = clienteService.getClientesByVendedorId(vendedorId)
        return ResponseEntity.ok(clientes)
    }

    // GET 2
    @GetMapping("/areas")
    fun getDistinctAreas(): ResponseEntity<List<String>> {
        val areas = clienteService.getDistinctAreas()
        return ResponseEntity.ok(areas)
    }

    @GetMapping("/gerente/{gerenteId}")
    fun getClientesByGerenteId(@PathVariable gerenteId: Int): ResponseEntity<List<ClienteDTO>> {
        val clientes = clienteService.getClientesByGerenteId(gerenteId)
        return ResponseEntity.ok(clientes)
    }

    @GetMapping("/gerente/{gerenteId}/total")
    fun getTotalClientesByGerenteId(@PathVariable gerenteId: Int): ResponseEntity<Int> {
        val totalClientes = clienteService.getTotalClientesByGerenteId(gerenteId)
        return ResponseEntity.ok(totalClientes)
    }

}