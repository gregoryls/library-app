let myLibrary = [];
const table = document.getElementById('bookList')
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let infoString = '';
        infoString = title + ' by ' + author + ', ' + pages + ' pages, ' + read;
        return infoString;
    }
}
const locklands = new Book('Locklands','Robert Jackson Bennet',544,'read');
const uzumaki = new Book('Uzumaki','Junji Ito',110,'read');
const cytonic = new Book('Cytonic','Brandon Sanderson',409,'read');
myLibrary.push(locklands,uzumaki,cytonic);

function displayLibraryBooks(books){
    books.forEach( book => {
        let row = table.insertRow();
        let title = row.insertCell(0);
        title.textContent = book.title;
        let author = row.insertCell(1);
        author.textContent = book.author;
        let pages = row.insertCell(2);
        pages.textContent = book.pages;
        let read = row.insertCell(3);
        read.textContent = book.read;
    })
}
displayLibraryBooks(myLibrary);