package api.againrest.services

import api.againrest.models.Gerente
import api.againrest.models.Vendedor
import api.againrest.repositories.VendedorRepository
import api.againrest.requests.CadastroGerenteRequest
import api.againrest.requests.CadastroVendedorRequest
import api.againrest.requests.LoginRequest
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class VendedorService(
    val vendedorRepository: VendedorRepository
) {

    fun autenticarVendedor(vendedorLogin: LoginRequest): ResponseEntity<Vendedor>{

        val vendedorEncontrado = vendedorRepository.findByEmail(vendedorLogin.email)

        return if (vendedorEncontrado.isEmpty){
            println("vendedor não encontrado")
            ResponseEntity.status(404).build()
        } else {
            println("vendedor encontrado")
            if(vendedorEncontrado.get().senha == vendedorLogin.senha){
                println("vendedor encontrado e senha certa")
                val vendedorLogado: Vendedor = vendedorEncontrado.get()
//                vendedorLogado.autenticado = true
                ResponseEntity.ok(vendedorRepository.save(vendedorLogado))
            } else {
                println("vendedor encontrado e senha errada")
                ResponseEntity.status(404).build()
            }
        }
    }

    fun cadastroVendedor(cadastroVendedor: CadastroVendedorRequest): ResponseEntity<Vendedor>{

        val selectVendedor = vendedorRepository.findByEmail(cadastroVendedor.vendedor.email)
        return if(selectVendedor.isPresent) {
            println("Email já cadastrado")
            ResponseEntity.status(404).build()
        } else {
            val cadVendedor: Vendedor = vendedorRepository.save(cadastroVendedor.vendedor)
            ResponseEntity.status(201).body(cadVendedor)
        }
    }

    fun aprovarVendedor(vendedorId: Int): ResponseEntity<Vendedor>{

        val vendedorEncontrado = vendedorRepository.findById(vendedorId)

        return if (vendedorEncontrado.isEmpty){
            println("vendedor não encontrado")
            ResponseEntity.status(404).build()
        } else {
            println("vendedor encontrado")
            val vendedorAprovado: Vendedor = vendedorEncontrado.get()
            vendedorAprovado.aprovado = true
            ResponseEntity.ok(vendedorRepository.save(vendedorAprovado))
        }
    }

    fun reprovarVendedor(vendedorId: Int): ResponseEntity<Vendedor>{

        val vendedorEncontrado = vendedorRepository.findById(vendedorId)

        return if (vendedorEncontrado.isEmpty){
            println("vendedor não encontrado")
            ResponseEntity.status(404).build()
        } else {
            println("vendedor encontrado")
            val vendedorReprovado: Vendedor = vendedorEncontrado.get()
            vendedorReprovado.aprovado = false
            ResponseEntity.ok(vendedorRepository.save(vendedorReprovado))
        }
    }


}