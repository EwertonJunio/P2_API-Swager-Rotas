/**
@swagger
 * tags:
 *   name: Usuários
 *   description: Rotas relacionadas a usuários
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Rota principal
 *     description: Retorna uma mensagem indicando que é a rota principal.
 *     responses:
 *       200:
 *         description: Sucesso, retorna a mensagem da rota principal
 *       500:
 *         description: Erro no servidor ao acessar a rota principal
 */

/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Retorna todos os usuários
 *     description: Obtém a lista de todos os usuários cadastrados
 *     tags: [Usuários]
 *     responses:
 *       200:
 *         description: Sucesso, retorna a lista de usuários
 *       500:
 *         description: Erro no servidor ao obter a lista de usuários
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Adiciona um usuário
 *     description: Adiciona um novo usuário à lista de usuários
 *     tags: [Usuários]
 *     responses:
 *       200:
 *         description: Sucesso, retorna a confirmação de adição do usuário
 *       500:
 *         description: Erro no servidor ao adicionar o usuário
 */
const express = require('express');
const router = express.Router();

// Rota principal (GET /)
router.get('/', (req, res) => {
    res.send('Rota principal');
});

// Rota para obter todos os usuários (GET /api/user)
router.get('/api/user', (req, res) => {
    // Lógica para obter todos os usuários
    res.send('Obter todos os usuários');
});

// Rota para adicionar usuário (POST /api/users)
router.post('/api/users', (req, res) => {
    // Lógica para adicionar usuário
    res.send('Adicionar usuário');
});

module.exports = router;