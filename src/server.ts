import express, { Application, NextFunction, Request, Response } from 'express';
import router from './routes/UserRoutes';

const app: Application = express();

const PORT: number = 1379;

app.use(express.json());

app.use(router);

app.use((req: Request, res: Response): Response => {
    return res.status(404).json({ erro: "A passagem de Caradhras está fechada por Saruman. Esta rota não existe para nós. Só nos sobrou...Moria." });
});

// definindo o middleware

// const verificacao = (req: Request, res: Response, next: NextFunction) => {

//     // no console mostrará o caminho da url pela requisiçao
//     console.log(`Requisição recebida em: ${req.url}`);
//     next();
// }

// // aplicando o middleare "verificaçao" globalmente
// // será executado depois de todas as requisiçoes, independente da rota
// app.use(verificacao);

// // criando caminho com a porta e dados requisitos e response certo
// app.get('/dados', (req: Request, res:Response):Response => {
//     return res.status(200).json({id: Number, nome: String, tipo: String, raca:String, arma:String, status:String});
// })

// app.post('/personagens', (req: Request, res:Response, next: NextFunction): Response => {
//     const{nome} = req.body;
//     console.log("Cala boca Frodo");
//     if (!nome) return res.status(400).json({mensagem: 'Nome do personagem obrigatório!'});
//     return res.status(201).send(`Personagem ${nome} criado com sucesso!`);
// })

// // se der certo, executa isso
// app.use((req:Request, res:Response, next: NextFunction): Response => {
//     next();
//     return res.status(201).json({mensagem: 'Recebido com sucesso!'});
// })

// // caso de erro, aparecerá isso aqui
// app.use((req:Request, res: Response, next: NextFunction): Response => {
//     next();
//     return res.status(201).json({mensagem: 'A passagem de Caradhras está fechada por Saruman. Esta rota não existe para nós. Só nos sobrou...Moria.!'});
// })


// Esse código apaga o dado pelo ID
// app.delete('/dados/:id', (req: Request, res: Response): Response => {
//     const {id} = req.params;


//     if(!id) return res.status(400).json({mensagem: 'Frodo sente o Um Anel querendo retornar ao seu Mestre... ID não enviado'});
//     return res.status(201).json('Frodo sente o Um Anel querendo retornar ao seu Mestre...ID não enviado'); // sem conteúdo
// })

// // PUT (ATUALIZAÇÃO DE PERSONAGENS E SEUS DADOS)
// app.put('/personagens/:id', (req: Request, res:Response): Response => {
//     return res.status(200).json({ mensagem: 'Personagem atualizado completamente!'})
// })

// // PATCH (ATUALIZAÇÃO DE PERSONAGENS PARCIALMENTE)
// app.patch('/personagens/:id', (req:Request, res:Response): Response => {
//     return res.status(200).json({ mensagem: 'Personagem atualizado parcialmente! '});
// });

// caso nada funcione, o express vai chegar ate aqui 
app.listen(PORT, (): void => {
    console.log(`Seu servidor está funcionando em http://localhost:${PORT}`);
});