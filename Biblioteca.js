export class Biblioteca {

    #livros = [];

    adicionarLivro(livro) {

        if (livro.isbn.length === 13) {

            if (livro.anoPublicacao > 0 && livro.anoPublicacao <= 2026) {

                for (let i = 0; i < this.#livros.length; i++) {
                    if (this.#livros[i].isbn === livro.isbn) {
                        return false;
                    }
                }

                this.#livros.push(livro);
                return true;
            }

            return false;
        }

        return false;
    }

    listarLivros() {
        return this.#livros;
    }

    buscarPorIsbn(isbn) {
        for (let i = 0; i < this.#livros.length; i++) {
            if (this.#livros[i].isbn === isbn) {
                return this.#livros[i];
            }
        }
        return false;
    }

    removerLivro(isbn) {
        for (let i = 0; i < this.#livros.length; i++) {
            if (this.#livros[i].isbn === isbn) {
                this.#livros.splice(i, 1);
                return true;
            }
        }
        return false;
    }   
    atualizarLivro(isbn, novosDados){
    for (let i = 0; i < this.#livros.length; i++) {
        if (this.#livros[i].isbn === isbn) {
            const livroAtual = this.#livros[i];
            let livroAtualizado = {
                titulo: livroAtual.titulo,
                autor: livroAtual.autor,
                isbn: livroAtual.isbn,
                anoPublicacao: livroAtual.anoPublicacao,
                disponivel: livroAtual.disponivel
            };
            if (novosDados.titulo !== undefined) {
                livroAtualizado.titulo = novosDados.titulo; }
            if (novosDados.autor !== undefined) {
                livroAtualizado.autor = novosDados.autor;
            }
             if (novosDados.isbn !== undefined) {
                livroAtualizado.isbn = novosDados.isbn;
            }
            if (novosDados.anoPublicacao !== undefined) {
                if (novosDados.anoPublicacao > 0 && novosDados.anoPublicacao <= n2026) {
                    livroAtualizado.anoPublicacao = novosDados.anoPublicacao;
                } else {
                    return false;
                }
            }
            if (novosDados.disponivel !== undefined) {
                livroAtualizado.disponivel = novosDados.disponivel;
            }
            this.#livros[i] = livroAtualizado;
            return true;
            }
    return false;
        }
    }
}
