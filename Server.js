import express from 'express';
import { Biblioteca } from './Biblioteca.js';
import { Livro } from './Livro.js';

const app = express();
app.use(express.json());

const minhaBiblioteca = new Biblioteca();

app.get('/livros', (req, res) => {
    const lista = minhaBiblioteca.listarLivros();
    res.status(200).json(lista);
});

app.post('/livros', (req, res) => {
    const { titulo, autor, isbn, anoPublicacao, disponivel } = req.body;
    const novoLivro = new Livro(titulo, autor, isbn, anoPublicacao, disponivel);
    const resultado = minhaBiblioteca.adicionarLivro(novoLivro);
    if (resultado) {
        res.status(201).json({
            mensagem: "Livro criado com sucesso",
            livro: novoLivro
        });
    } else {
        res.status(400).json({
            erro: "Dados inválidos"
        });
    }
});

app.get('/livros/:isbn', (req, res) => {
    const { isbn } = req.params;
    const livro = minhaBiblioteca.buscarPorIsbn(isbn);
    if (livro) {
        res.status(200).json(livro);
    } else {
        res.status(404).json({
            erro: "Livro não encontrado"
        });
    }
});

app.delete('/livros/:isbn', (req, res) => {
    const { isbn } = req.params;
    const removido = minhaBiblioteca.removerLivro(isbn);
    if (removido) {
        res.status(200).json({
            mensagem: "Livro removido com sucesso"
        });
    } else {
        res.status(404).json({
            erro: "Livro não existe na biblioteca"
        });
    }
});

const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Servidor de Agenda ronando em http://localhost:${PORT}`);
});