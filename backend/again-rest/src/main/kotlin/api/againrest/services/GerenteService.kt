package api.againrest.services

import api.againrest.models.Gerente
import api.againrest.models.Vendedor
import api.againrest.repositories.ClienteRepository
import api.againrest.repositories.CompraRepository
import api.againrest.repositories.GerenteRepository
import api.againrest.repositories.VendedorRepository
import api.againrest.requests.CadastroGerenteRequest
import api.againrest.requests.GerenteDetailsDTO
import api.againrest.requests.LoginRequest
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class GerenteService(
    val gerenteRepository: GerenteRepository,
    val compraRepository: CompraRepository,
    val clienteRepository: ClienteRepository,
    val vendedorRepository: VendedorRepository
) {

    fun autenticarGerente(gerenteLogin: LoginRequest): ResponseEntity<Gerente> {

        val gerenteEncontrado = gerenteRepository.findByEmail(gerenteLogin.email)

        return if (gerenteEncontrado.isEmpty){
            ResponseEntity.status(404).build()
        } else {
            if(gerenteEncontrado.get().senha == gerenteLogin.senha){
                val gerenteLogado: Gerente = gerenteEncontrado.get()
//                gerenteLogado.autenticado = true
                ResponseEntity.ok(gerenteRepository.save(gerenteLogado))
            } else {
                ResponseEntity.status(404).build()
            }
        }
    }

    fun cadastroGerente(cadastroGerente: CadastroGerenteRequest): ResponseEntity<Gerente>{

        val selectGerente = gerenteRepository.findByEmail(cadastroGerente.gerente.email)
        return if(selectGerente.isPresent) {
            println("Email já cadastrado")
            ResponseEntity.status(404).build()
        } else {
            val cadGerente: Gerente = gerenteRepository.save(cadastroGerente.gerente)
            ResponseEntity.status(201).body(cadGerente)
        }
    }

    fun getGerenteDetails(gerenteId: Int): GerenteDetailsDTO {
        val gerente = gerenteRepository.findById(gerenteId).orElseThrow { RuntimeException("Gerente not found") }
        val vendedores = vendedorRepository.findByGerenteIdGerente(gerenteId)
        val clientes = clienteRepository.findByVendedorGerenteIdGerente(gerenteId)
        val compras = compraRepository.findByVendedorGerenteIdGerente(gerenteId)

        val produtos = compras.mapNotNull { it.produto }.distinct()

        return GerenteDetailsDTO(gerente, vendedores, clientes, compras, produtos)
    }

}