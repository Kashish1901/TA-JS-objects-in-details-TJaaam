let form = document.querySelector("form");
let button = document.querySelector("button");
let nameElm = form.elements.bookName;
let authorElm = form.elements.bookAuthor;
let isbnELm = form.elements.bookImg;
let root = document.querySelector(".book-list");

class BookList{
    constructor(books = []){
        this.books = books;
     
    }
    addBook(name , author , img){
        let book = new Book(name , author , img);
        this.books.push(book);
        this.createUI();
    }
    createUI(){
        root.innerHTML = "";
        this.books.forEach((book) => {
        let li = document.createElement("li");
        li.classList.add("head");
        let h2 = document.createElement("h2");
        h2.innerText = book.name;
        let h3 = document.createElement("h3");
        h3.innerText = book.author;
        let p = document.createElement("p");
        p.innerText = book.isbn;
        let span= document.createElement("span");
        span.innerText = "❌";
        li.append(h2 , h3 , p , span);
        root.append(li);
        })
        
    }
}

class Book{
    constructor(name , author , isbn){
        this.name = name;
        this.author= author;
        this.isbn = Date.now();
        this.isRead = false;
    }
}
function handleSubmit(event){
    event.preventDefault();
    let name = nameElm.value;
    let author = authorElm.value;
    let isbn = isbnELm.value;
    library.addBook(name , author , isbn)
    nameElm.value = " ";
    authorElm.value = " ";
    isbnELm.value= " ";
}
form.addEventListener("submit" , handleSubmit)
let library = new BookList();
