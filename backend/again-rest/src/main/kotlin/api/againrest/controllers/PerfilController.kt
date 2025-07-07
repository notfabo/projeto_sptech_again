package api.againrest.controllers

import api.againrest.requests.PerfilDTO
import api.againrest.services.ClienteService
import api.againrest.services.PerfilService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/perfil")
class PerfilController(
    val perfilService: PerfilService
) {
    @GetMapping("/cliente/{clienteNome}")
    fun getPerfilByClienteNome(@PathVariable clienteNome: String): ResponseEntity<PerfilDTO> {
        val perfil = perfilService.getPerfilByClienteNome(clienteNome)
        return ResponseEntity.ok(perfil)
    }
}