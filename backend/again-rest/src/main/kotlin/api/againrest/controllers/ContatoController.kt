package api.againrest.controllers

import api.againrest.requests.ContatoDTO
import api.againrest.services.ContatoService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/contatos")
class ContatoController (
    val contatoService: ContatoService
    ) {

    @GetMapping("/vendedor/{id}")
    fun getVendedorContatos(@PathVariable("id") vendedorId: Int): ResponseEntity<List<ContatoDTO>> {
        val contatos = contatoService.getVendedorContatos(vendedorId)
        return ResponseEntity.ok(contatos)
    }

    @GetMapping("/cliente/{nome}")
    fun getContatosByClienteNome(@PathVariable("nome") clienteNome: String): ResponseEntity<List<ContatoDTO>> {
        val contatos = contatoService.getContatosByClienteNome(clienteNome)
        return ResponseEntity.ok(contatos)
    }

    @GetMapping("/gerente/{id}")
    fun getGerenteContatos(@PathVariable("id") gerenteId: Int): ResponseEntity<List<ContatoDTO>> {
        val contatos = contatoService.getGerenteContatos(gerenteId)
        return ResponseEntity.ok(contatos)
    }



}


