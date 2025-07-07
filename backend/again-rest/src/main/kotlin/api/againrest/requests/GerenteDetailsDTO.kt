package api.againrest.requests

import api.againrest.models.*

class GerenteDetailsDTO(
    val gerente: Gerente,
    val vendedores: List<Vendedor>,
    val clientes: List<Cliente>,
    val compras: List<Compra>,
    val produtos: List<Produto>
) {
}