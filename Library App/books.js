let myLibrary = [];
const table = document.getElementById('bookList');
const bookSubmitButton = document.querySelector('#bookSubmit');
// const button = document.createElement('button');
// button.textContent = '🗑';

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
const locklands = new Book('Locklands','Robert Jackson Bennet',544,'Yes');
const uzumaki = new Book('Uzumaki','Junji Ito',110,'Yes');
const cytonic = new Book('Cytonic','Brandon Sanderson',409,'Yes');
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
        let trash = row.insertCell(4);
        // trash.textContent = '🗑';
        trash.innerHTML = `<button  >X</button>`;
        

        // https://stackoverflow.com/questions/45656949/how-to-return-the-row-and-column-index-of-a-table-cell-by-clicking
    });
    // This code block finds all buttons with a table ancestor and adds a function
    // to each that on click finds the closest table row to that button and deletes 
    // the row in the table with that row's index. 
    let buttons = document.querySelectorAll('table button');
    buttons.forEach(x => {
        x.addEventListener('click', ()=>{
            // console.log(x.closest('tr').rowIndex);
            table.deleteRow(x.closest('tr').rowIndex);
        });
    });
}
displayLibraryBooks(myLibrary);

bookSubmitButton.addEventListener('click', () =>{
    if (userTitleInput.value == '') return;
    const userBook = new Book(userTitleInput.value,userAuthorInput.value,
        userPagesInput.value,userReadInput.value);
        userTitleInput.value = '';
        userAuthorInput.value = '';
        userPagesInput.value = '';
        userReadInput.value = '';
        myLibrary.push(userBook);
        const tableRows = table.rows.length;
        for (let i = 1; i < tableRows;i++) {
            table.deleteRow(1);
            
        };
        displayLibraryBooks(myLibrary);
        
        
});
