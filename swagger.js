const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Projeto Ewerton',
            version: '1.0.0',
            description: 'Prestador de Serviço',
        },
    },
    apis: ['./routes/*.js'], // Caminho para os arquivos que contêm as rotas da sua aplicação
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;