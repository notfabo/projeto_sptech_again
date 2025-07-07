package api.againrest.services

import api.againrest.models.Oportunidade
import api.againrest.repositories.OportunidadeRepository
import org.springframework.stereotype.Service

@Service
class OportunidadeService(
    val oportunidadeRepository: OportunidadeRepository,
) {

    fun obterPorVendedor(vendedor: String): List<Oportunidade> {
        return oportunidadeRepository.findByVendedor(vendedor)
    }

    fun obterPorCliente(cliente: String): List<Oportunidade> {
        return oportunidadeRepository.findByCliente(cliente)
    }

    fun obterOportunidadesPorGerente(gerenteId: Int): List<Oportunidade> {
        return oportunidadeRepository.findOportunidadesByGerenteId(gerenteId)
    }

    fun obterUltimaOportunidadePorGerente(gerenteId: Int): List<Oportunidade> {
        return oportunidadeRepository.findUltimaOportunidadePorGerenteId(gerenteId).take(1)
    }

    fun contarOportunidadesPorGerenteEMes(gerenteId: Int, mes: Int): Long {
        return oportunidadeRepository.contarOportunidadesPorGerenteEMes(gerenteId, mes)
    }

    fun somaCustoPorGerenteAno2024(gerenteId: Int): Map<Int, Double> {
        val resultados = oportunidadeRepository.somaCustoPorGerenteAno2024(gerenteId)

        return resultados.associate {
            val mes = (it[0] as Int)
            val totalCusto = (it[1] as Double?) ?: 0.0
            mes to totalCusto
        }
    }

}