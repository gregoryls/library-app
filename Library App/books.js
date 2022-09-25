let myLibrary = [];
const table = document.getElementById('bookList');
const bookSubmitButton = document.querySelector('#bookSubmit');
// const button = document.createElement('button');
// button.textContent = '🗑';

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    // (this.read) ? this.read = 'checked' : this.read = 'unchecked';
    // if (this.read) {
    //     this.read = 'checked';
    // };
    this.read = read;
    this.info = function() {
        let infoString = '';
        //need to fix read portion with new checked method
        infoString = title + ' by ' + author + ', ' + pages + ' pages, ' + read;
        return infoString;
    }
}
const locklands = new Book('Locklands','Robert Jackson Bennet',544,true);
const uzumaki = new Book('Uzumaki','Junji Ito',110,true);
const cytonic = new Book('Cytonic','Brandon Sanderson',409,true);
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
        //in book function read in checked or unchecked 
        console.log(book.read)
        read.innerHTML = '<input type=\"checkbox\" ></input>';
        read.checked = true;
        let trash = row.insertCell(4);
        // trash.textContent = '🗑';
        trash.innerHTML = `<button  >X</button>`;
        
        // reference on cellIndex and rowIndex
        // https://stackoverflow.com/questions/45656949/how-to-return-the-row-and-column-index-of-a-table-cell-by-clicking
    });
    // This code block finds all buttons with a table ancestor and adds a function
    // to each that on click finds the closest table row to that button and deletes 
    // the row in the table with that row's index. 
    let buttons = document.querySelectorAll('table button');
    buttons.forEach(x => {
        x.addEventListener('click', ()=>{
            
            let deleteIndex = x.closest('tr').rowIndex;
            if (confirm(`Are you sure you want to delete 
            ${table.rows[deleteIndex].cells[0].textContent }`)){
                console.log(deleteIndex)
                table.deleteRow(deleteIndex);
                //remove book from library after deleting the table entry
                myLibrary.splice(deleteIndex-1,1)
                
            };
        });
    });
}
displayLibraryBooks(myLibrary);

bookSubmitButton.addEventListener('click', () =>{
    if (userTitleInput.value == '') return;
    const userBook = new Book(userTitleInput.value,userAuthorInput.value,
        userPagesInput.value,userReadInput.checked);
        //clears the user submission form
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
