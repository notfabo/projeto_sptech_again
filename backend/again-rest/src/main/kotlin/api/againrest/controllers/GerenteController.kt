package api.againrest.controllers

import api.againrest.models.Gerente
import api.againrest.models.Vendedor
import api.againrest.requests.CadastroGerenteRequest
import api.againrest.requests.GerenteDetailsDTO
import api.againrest.requests.LoginRequest
import api.againrest.services.GerenteService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/gerentes")
class GerenteController(
    val gerenteService: GerenteService
) {
    @PostMapping("/login/gerente")
    fun logar(@RequestBody gerenteLogin: LoginRequest): ResponseEntity<Gerente> {
        return gerenteService.autenticarGerente(gerenteLogin)
    }

    @PostMapping("/cadastrar/gerente")
    fun cadastroGerente(@RequestBody cadGerente: CadastroGerenteRequest): ResponseEntity<Gerente>{
        return gerenteService.cadastroGerente(cadGerente)
    }

    @GetMapping("/{id}/details")
    fun getGerenteDetails(@PathVariable("id") gerenteId: Int): ResponseEntity<GerenteDetailsDTO> {
        return ResponseEntity.ok(gerenteService.getGerenteDetails(gerenteId))
    }
}
