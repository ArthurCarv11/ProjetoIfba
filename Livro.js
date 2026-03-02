export class Livro {

    constructor(titulo, autor, isbn, anoPublicacao, disponivel = true) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.anoPublicacao = anoPublicacao;
        this.disponivel = disponivel;
    }

}