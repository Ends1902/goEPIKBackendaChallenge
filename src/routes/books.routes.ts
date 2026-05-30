import { Router, Request, Response } from "express";
import { v4 as uuid } from "uuid";

import { books } from "../data/books";
import { Book } from "../types/Book";

const router = Router();

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Lista todos os livros
 *     responses:
 *       200:
 *         description: Lista de livros
 */
router.get("/", (req: Request, res: Response) => {
  res.json(books);
});


/**
 * @swagger
 * /books:
 *   post:
 *     tags: [Books]
 *     summary: Cadastra um novo livro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - author
 *               - year
 *             properties:
 *               title:
 *                 type: string
 *                 example: Clean Code
 *               author:
 *                 type: string
 *                 example: Robert C. Martin
 *               year:
 *                 type: integer
 *                 example: 2008
 *     responses:
 *       201:
 *         description: Livro criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post("/", (req: Request, res: Response) => {
  const { title, author, year } = req.body;

  if (!title || !author || !year) {
    return res.status(400).json({
      message: "Título, autor e ano são obrigatórios",
    });
  }

  const book: Book = {
    id: uuid(),
    title,
    author,
    year: Number(year),
  };

  books.push(book);

  return res.status(201).json(book);
});

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     tags: [Books]
 *     summary: Exclui um livro
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do livro
 *     responses:
 *       204:
 *         description: Livro excluído com sucesso
 *       404:
 *         description: Livro não encontrado
 */
router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const index = books.findIndex((book) => book.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Livro não encontrado",
    });
  }

  books.splice(index, 1);

  return res.status(204).send();
});

export default router;