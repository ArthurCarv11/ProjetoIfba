export class Biblioteca {

    #livros = [];

    adicionarLivro(livro) {

        if (livro.isbn.length === 13) {

            if (livro.anoPublicacao > 0 && livro.anoPublicacao <= new Date().getFullYear()) {

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

}