package api.againrest.controllers

import api.againrest.models.Oportunidade
import api.againrest.services.OportunidadeService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.client.RestTemplate

@RestController
@RequestMapping("/oportunidades")
class OportunidadeController(
    val oportunidadeService: OportunidadeService,
) {

    @GetMapping("/porVendedor/{vendedor}")
    fun getOportunidadePorVendedor(@PathVariable vendedor: String): ResponseEntity<List<Oportunidade>> {
        val oportunidades = oportunidadeService.obterPorVendedor(vendedor)
        return if (oportunidades.isNotEmpty()) {
            ResponseEntity.ok(oportunidades)
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @GetMapping("/porCliente/{cliente}")
    fun getOportunidadesPorCliente(@PathVariable cliente: String): ResponseEntity<List<Oportunidade>> {
        val oportunidades = oportunidadeService.obterPorCliente(cliente)
        return if (oportunidades.isNotEmpty()) {
            ResponseEntity.ok(oportunidades)
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @GetMapping("/porGerente/{gerenteId}")
    fun getOportunidadesPorGerente(@PathVariable gerenteId: Int): ResponseEntity<List<Oportunidade>> {
        val oportunidades = oportunidadeService.obterOportunidadesPorGerente(gerenteId)
        return if (oportunidades.isNotEmpty()) {
            ResponseEntity.ok(oportunidades)
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @GetMapping("/porGerente/{gerenteId}/ultimo")
    fun getUltimaOportunidadePorGerente(@PathVariable gerenteId: Int): ResponseEntity<List<Oportunidade>> {
        val oportunidades = oportunidadeService.obterUltimaOportunidadePorGerente(gerenteId)
        return if (oportunidades.isNotEmpty()) {
            ResponseEntity.ok(oportunidades)
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @GetMapping("/porGerente/{gerenteId}/oportunidadesMes/{mes}")
    fun getOportunidadesPorGerenteEMes(
        @PathVariable gerenteId: Int,
        @PathVariable mes: Int
    ): ResponseEntity<Long> {
        val quantidadeOportunidades = oportunidadeService.contarOportunidadesPorGerenteEMes(gerenteId, mes)
        return ResponseEntity.ok(quantidadeOportunidades)
    }

    @GetMapping("/porGerente/{gerenteId}/oportunidadesAno2024/somaCusto")
    fun getSomaCustoPorGerenteAno2024(
        @PathVariable gerenteId: Int
    ): ResponseEntity<Map<Int, Double>> {
        val somaCustosPorMes = oportunidadeService.somaCustoPorGerenteAno2024(gerenteId)
        return ResponseEntity.ok(somaCustosPorMes)
    }





}