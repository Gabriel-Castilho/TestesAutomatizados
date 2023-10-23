const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
const url = Cypress.env('API_BASE_URL')


Cypress.Commands.add('cancelOrder', (entity_id, protocol, reason, refund, type, partial, item_id, value, sku_new) => {
    cy.request({
        method: 'POST',
        url: `${url}rest/V1/bufranchise-ordercancel/cancel`,
        headers: { authorization },
        body: [{
            "entity_id": entity_id,
            "protocol": protocol,
            "reason": reason,
            "refund": refund,
            "type": type,
            "partial": partial,
            "items": [
                {
                    "item_id": item_id,
                    "value": value,
                    "sku_new": sku_new
                }
            ]
        }]

    })
})

Cypress.Commands.add('fixData', () => {
    cy.request({
        method: 'GET',
        url: `${url}bufranchise_ordercancel/index/fixdata`,
    })
})

Cypress.Commands.add('getOrder', (entity_id) => {
    cy.request({
        method: 'GET',
        url: `${url}rest/V1/orders/${entity_id}`,
        headers: { authorization }
    })
})
