"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)(); // Tipando 'app' como 'Application'
const PORT = 3000; // Tipagem da porta como número
// Middleware para permitir que o Express interprete JSON
app.use(express_1.default.json());
// Rota GET para a raiz
app.get('/', (req, res) => {
    res.send('🚀 Servidor TypeScript rodando!');
});
// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
});
