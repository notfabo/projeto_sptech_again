package api.againrest.controllers

import api.againrest.models.Vendedor
import api.againrest.requests.CadastroVendedorRequest
import api.againrest.requests.LoginRequest
import api.againrest.services.VendedorService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/vendedores")
class VendedorController(
    val vendedorService: VendedorService
) {

    @PostMapping("/login/vendedor")
    fun logar(@RequestBody vendedorLogin: LoginRequest): ResponseEntity<Vendedor> {
        return vendedorService.autenticarVendedor(vendedorLogin)
    }

    @PostMapping("/cadastrar/vendedor")
    fun cadastroVendedor(@RequestBody cadVendedor: CadastroVendedorRequest): ResponseEntity<Vendedor>{
        return vendedorService.cadastroVendedor(cadVendedor)
    }

    @PostMapping("/aprovar/{id}")
    fun aprovar(@PathVariable("id") vendedorId: Int): ResponseEntity<Vendedor> {
        return vendedorService.aprovarVendedor(vendedorId)
    }

    @PostMapping("/reprovar/{id}")
    fun reprovar(@PathVariable("id") vendedorId: Int): ResponseEntity<Vendedor> {
        return vendedorService.reprovarVendedor(vendedorId)
    }


}