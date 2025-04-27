const axios = require('axios');

// URL do Webhook do seu Discord
const webhookUrl = 'https://discordapp.com/api/webhooks/1363178397101985973/AU2jBuRqiNwMLB2RB30tpuexoYLM0kHzAeJ3Favt0RgWyFb8JsPay6D8lGQ_lEdXNyYR';

// Dados da venda (normalmente você puxaria isso da Ereemby ou seu sistema)
const venda = {
    email: 'comprador@example.com',
    idPedido: '109186076897',
    nomeProduto: 'PASSE BOOYAH',
    quantidade: 1,
    total: 'R$ 5,99',
    metodoPagamento: 'Pix',
    comentario: 'Quero receber o código por e-mail, por favor.'
};

// Enviar a mensagem formatada para o Discord
async function enviarVenda() {
    try {
        await axios.post(webhookUrl, {
            embeds: [
                {
                    color: 0x00FF00,
                    title: 'Venda concluida',
                    fields: [
                        { name: 'E-mail', value: venda.email, inline: false },
                        { name: 'ID do Pedido', value: venda.idPedido, inline: false },
                        { name: 'Nome do Produto', value: venda.nomeProduto, inline: false },
                        { name: 'Quantidade', value: venda.quantidade.toString(), inline: false },
                        { name: 'Total', value: venda.total, inline: false },
                        { name: 'Método de Pagamento', value: venda.metodoPagamento, inline: false },
                        { name: 'Comentário do Comprador', value: venda.comentario || 'Nenhum comentário', inline: false }
                    ],
                    footer: {
                        text: ''
                    }
                }
            ]
        });
        console.log('Venda enviada com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar venda:', error);
    }
}

enviarVenda();