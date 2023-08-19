
class Book{
    constructor(title , category , author){
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = false;
        this.finishedDate = null;
    }
    markBookAsRead(){
       this.isRead = true;
       this.finishedDate = Date.now();
    }
    
}


class BookList{
    constructor(){
       this.books = [];
       this.currentIndexBook = 0;
    }
    add(books =[]){
         this.books = this.books.concat(books);
        return this.books;
    }
    getCurrentBook(){
        this.books[this.currentIndexBook]
        return this.books[this.currentIndexBook];
    }
    getNextBook(){
       this.books = this.books[this.currentIndexBook + 1];
        return this.books[this.currentIndexBook];
    }
    getPreBook(){
        this.books = this.books[this.currentIndexBook - 1];
        return this.books[this.currentIndexBook];
    }
    changeCurrentBook(index){
        this.currentIndexBook =index;
        return this.currentIndexBook;
    }
}

let book = new Book("Alone on a Wide, Wide Sea","non-friction" , "Michael Morpurgo");
let book1 = new Book("An Acceptable Time","non-friction" , "Madeleine L'Engle");
let book2 = new Book("Antic Hay","non-friction" , "Aldous Huxley");
let book3 = new Book("Arms and the Man","non-friction" , "George Bernard Shaw	");
let book4 = new Book("The Daffodil Sky","non-friction" , "H. E. Bates");

let library = new BookList()
