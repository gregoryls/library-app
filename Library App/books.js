let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.page = pages;
    this.read = read;
    this.info = function() {
        let infoString = '';
        infoString = title + ' by ' + author + ', ' + pages + ' pages, ' + read;
        return infoString;
    }
}
const locklands = new Book('Locklands','Robert Jackson Bennet',544,'read');
console.log(locklands.info());