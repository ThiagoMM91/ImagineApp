const crypto = require('crypto');
const connection = require('../database/connections.js')

module.exports = {
    async index(request, response) { 
        /* Seleciona todos os campos de registros dentro da tabela ongs*/
    const ongs = await connection('ongs').select('*');
        /*retorna em resposta um JSON da tabela ongs*/
    return response.json(ongs);
    },


    async create(request,response){
        const { name, email, whatsapp, city, uf } = request.body;

        /*criando um id único com valores randomicos que será o "CPF" da ONG*/
        const id = crypto.randomBytes(4).toString('HEX');
        
        /*Inserindo em um objeto com cada valor atribuindo no local correto*/ 
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        /*aqui retornamos para a ONG o valor de ID dela para info.*/
        return response.json({ id });
    }
}