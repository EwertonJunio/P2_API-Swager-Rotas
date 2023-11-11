/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Retorna todos os usuários
 *     description: Obtém a lista de todos os usuários cadastrados
 *     responses:
 *       200:
 *         description: Sucesso, retorna a lista de usuários
 *       500:
 *         description: Erro no servidor
 */
const express = require('express');
const router = express.Router();

// Rota para obter todos os usuários
router.get('/api/user', (req, res) => {
    // Sua lógica aqui
    res.send('Obter todos os usuários');
});

module.exports = router;