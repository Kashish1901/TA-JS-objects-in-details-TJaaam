
class Book{
    constructor(title , category , author , isRead=false , finishedDate){
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = isRead;
        this.finishedDate = finishedDate;
    }
    markBookAsRead(){
       return this.isRead = true;
    }
    finishedDate(){
        return this.finishedDate =  Date.now();
    }
}



class BoolList{
    constructor(array , index){
        this.array = array;
        this.index = index;
    }
    add([]){
        return this.array.push([]);
    }
    getCurrentBook(){
        return this.index;
    }
    getNextBook(){
        return this.index + 1;
    }
    getNextBook(){
        return this.index - 1;
    }
}