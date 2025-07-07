package api.againrest.services

import api.againrest.repositories.ClienteRepository
import api.againrest.requests.ClienteDTO
import api.againrest.requests.CompraDTO
import api.againrest.requests.ContatoDTO
import org.springframework.stereotype.Service
import java.util.*

@Service
class ClienteService(
    val clienteRepository: ClienteRepository
) {

    fun getClientesByVendedorId(vendedorId: Int): List<ClienteDTO> {
        val results = clienteRepository.findClientesByVendedorId(vendedorId)
        val clientesMap = mutableMapOf<Int, ClienteDTO>()

        results.forEach { result ->
            println("Processing result: ${result.toList()}")

            val idCliente = result[0] as Int
            val cliente = clientesMap.getOrPut(idCliente) {
                ClienteDTO(
                    idCliente = idCliente,
                    clienteNome = result[1] as String,
                    cnpj = result[2] as String,
                    embarque = result[3] as Date,
                    area = result[4] as String,
                    representanteNome = result[5] as String
                )
            }

            val contatoDataHora = result[7] as? Date
            println("Contato: contatoDataHora=$contatoDataHora for cliente=$idCliente")

            if (contatoDataHora != null) {
                val existingLatestContato = cliente.latestContatoData
                if (existingLatestContato == null || contatoDataHora.after(existingLatestContato)) {
                    println("Updating latest contact date: contatoDataHora=$contatoDataHora for cliente=$idCliente")
                    cliente.latestContatoData = contatoDataHora
                }
            } else {
                println("No contact to add for cliente=$idCliente")
            }

            val compraDataCompra = result[9] as? Date
            println("Compra: compraDataCompra=$compraDataCompra for cliente=$idCliente")

            if (compraDataCompra != null) {
                val existingLatestCompra = cliente.latestCompraData
                if (existingLatestCompra == null || compraDataCompra.after(existingLatestCompra)) {
                    println("Updating latest purchase date: compraDataCompra=$compraDataCompra for cliente=$idCliente")
                    cliente.latestCompraData = compraDataCompra
                }
            } else {
                println("No purchase to add for cliente=$idCliente")
            }
        }

        println("Final client map: $clientesMap")
        return clientesMap.values.toList()
    }

    fun getDistinctAreas(): List<String> {
        return clienteRepository.findDistinctAreas()
    }

    fun getClientesByGerenteId(gerenteId: Int): List<ClienteDTO> {
        // Buscar todos os vendedores do gerente
        val vendedorIds = clienteRepository.findVendedoresByGerenteId(gerenteId)

        if (vendedorIds.isEmpty()) {
            return emptyList()
        }

        val clientesMap = mutableMapOf<Int, ClienteDTO>()

        // Para cada vendedor, buscar seus clientes
        vendedorIds.forEach { vendedorId ->
            val results = clienteRepository.findClientesByVendedorId(vendedorId)

            results.forEach { result ->
                val idCliente = result[0] as Int
                val cliente = clientesMap.getOrPut(idCliente) {
                    ClienteDTO(
                        idCliente = idCliente,
                        clienteNome = result[1] as String,
                        cnpj = result[2] as String,
                        embarque = result[3] as Date,
                        area = result[4] as String,
                        representanteNome = result[5] as String
                    )
                }

                val contatoDataHora = result[7] as? Date
                if (contatoDataHora != null) {
                    val existingLatestContato = cliente.latestContatoData
                    if (existingLatestContato == null || contatoDataHora.after(existingLatestContato)) {
                        cliente.latestContatoData = contatoDataHora
                    }
                }

                val compraDataCompra = result[9] as? Date
                if (compraDataCompra != null) {
                    val existingLatestCompra = cliente.latestCompraData
                    if (existingLatestCompra == null || compraDataCompra.after(existingLatestCompra)) {
                        cliente.latestCompraData = compraDataCompra
                    }
                }
            }
        }

        return clientesMap.values.toList()
    }

    fun getTotalClientesByGerenteId(gerenteId: Int): Int {
        val clientes = getClientesByGerenteId(gerenteId)
        return clientes.size
    }
}

