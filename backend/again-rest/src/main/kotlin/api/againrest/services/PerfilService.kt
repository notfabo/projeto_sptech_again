package api.againrest.services

import api.againrest.repositories.PerfilRepository
import api.againrest.requests.PerfilDTO
import org.springframework.stereotype.Service
import java.math.BigInteger
import java.util.Date

@Service
class PerfilService(val perfilRepository: PerfilRepository) {

    fun getPerfilByClienteNome(clienteNome: String): PerfilDTO {
        val results = perfilRepository.findPerfilByClienteNome(clienteNome)
        if (results.isEmpty()) {
            throw RuntimeException("Perfil não encontrado")
        }
        val result = results[0] as Array<Any>
        val perfil = PerfilDTO(
            idCliente = result[0] as Int,
            clienteNome = result[1] as String,
            cnpj = result[2] as String,
            representanteNome = result[3] as String,
            representanteEmail = result[4] as String,
            representanteTelefone = result[5] as String,
            latestCompraData = result[6] as Date,
            quantidadeCompras = (result[7] as BigInteger).toInt(),
            produtosComprados = (result[8] as String).split(", ").toList()
        )
        return perfil
    }
}
