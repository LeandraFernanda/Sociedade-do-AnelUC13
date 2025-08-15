import { Request, Response } from 'express';
import { connection } from '../config/database';

export class UserController {
  async listUsers(req: Request, res: Response): Promise<Response> {
    const [rows] = await connection.query('SELECT * FROM personagens');
    return res.status(200).json(rows);
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    const { id, nome, tipo, raca, arma, status } = req.body;
    if (!nome || !tipo || !raca || !arma || !status) {
      return res.status(400).json({ mensagem: 'Obrigatório TODOS os campos serem preenchidos!' });
    }

    await connection.query('INSERT INTO personagens (nome, tipo, raca, arma, status) VALUES (?, ?, ?, ?, ?)', [nome, tipo, raca, arma, status]);
    return res.status(201).json({ mensagem: `${nome} cadastrado com sucesso!` });
  }

  async update(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;
    const {nome, tipo, raca, arma, status } = req.body;
    await connection.query('UPDATE personagens SET nome = ?, tipo = ?, raca = ?, arma = ?, status = ? WHERE id = ?', [nome, tipo, raca, arma, status, id]);
    return res.status(200).json({ mensagem: 'Personagem atualizado!' });
  }

    async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const [rows]: any = await connection.query('SELECT * FROM personagens WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ mensagem: 'Personagem não encontrado.' });
    }
    return res.status(200).json(rows[0]);
  }


  async delete(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;
    await connection.query('DELETE FROM personagens WHERE id = ?', [id]);
    return res.status(204).send();
  }
}
