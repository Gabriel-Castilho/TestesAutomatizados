const Joi = require ('joi')

const cancelSchema = Joi.object({
    entity_id:Joi.string(),
    protocol:Joi.string(),
    reason:Joi.string(),
    refund:Joi.string(),
    type:Joi.string(),
    partial:Joi.string(),
    items:Joi.array().items({
        item_id:Joi.string(),
        value:Joi.string(),
        sku_new:Joi.string()
    })
})


export default cancelSchema;