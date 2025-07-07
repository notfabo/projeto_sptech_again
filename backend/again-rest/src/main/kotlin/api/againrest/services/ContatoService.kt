package api.againrest.services

import api.againrest.repositories.CompraRepository
import api.againrest.repositories.ContatoRepository
import api.againrest.repositories.ProdutoRepository
import api.againrest.repositories.RepresentanteRepository
import api.againrest.requests.ContatoDTO
import org.springframework.stereotype.Service
import java.time.format.DateTimeFormatter

@Service
class ContatoService(
    private val contatoRepository: ContatoRepository,
    private val representanteRepository: RepresentanteRepository,
    private val compraRepository: CompraRepository,
    private val produtoRepository: ProdutoRepository
) {

    fun getVendedorContatos(vendedorId: Int): List<ContatoDTO> {
        val contatos = contatoRepository.findContatosByVendedorId(vendedorId)
        return contatos.map { contato ->
            val representante = representanteRepository.findById(contato.fkRepresentante ?: 0).orElse(null)
            val compra = compraRepository.findById(contato.fkCompra ?: 0).orElse(null)
            val cliente = compra?.cliente
            val produto = compra?.produto

            ContatoDTO(
                idContato = contato.id,
                contatoDataHora = contato.dataHora.format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm")),
                motivo = contato.motivo ?: "",
                fkRepresentante = contato.fkRepresentante ?: 0,
                nomeRepresentante = representante?.nome,
                fkCompra = contato.fkCompra ?: 0,
                nomeCliente = cliente?.nome,
                nomeProduto = produto?.nome
            )
        }
    }

    fun getContatosByClienteNome(clienteNome: String): List<ContatoDTO> {
        val contatos = contatoRepository.findContatosByClienteNome(clienteNome)
        return contatos.map { contato ->
            val representante = representanteRepository.findById(contato.fkRepresentante ?: 0).orElse(null)
            val compra = compraRepository.findById(contato.fkCompra ?: 0).orElse(null)
            val cliente = compra?.cliente
            val produto = compra?.produto

            ContatoDTO(
                idContato = contato.id,
                contatoDataHora = contato.dataHora.format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm")),
                motivo = contato.motivo ?: "",
                fkRepresentante = contato.fkRepresentante ?: 0,
                nomeRepresentante = representante?.nome,
                fkCompra = contato.fkCompra ?: 0,
                nomeCliente = cliente?.nome,
                nomeProduto = produto?.nome
            )
        }
    }

    fun getGerenteContatos(gerenteId: Int): List<ContatoDTO> {
        val contatos = contatoRepository.findContatosByGerenteId(gerenteId)
        return contatos.map { contato ->
            val representante = representanteRepository.findById(contato.fkRepresentante ?: 0).orElse(null)
            val compra = compraRepository.findById(contato.fkCompra ?: 0).orElse(null)
            val cliente = compra?.cliente
            val produto = compra?.produto

            ContatoDTO(
                idContato = contato.id,
                contatoDataHora = contato.dataHora.format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm")),
                motivo = contato.motivo ?: "",
                fkRepresentante = contato.fkRepresentante ?: 0,
                nomeRepresentante = representante?.nome,
                fkCompra = contato.fkCompra ?: 0,
                nomeCliente = cliente?.nome,
                nomeProduto = produto?.nome
            )
        }
    }


}
