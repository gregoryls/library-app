let myLibrary = [];
const table = document.getElementById('bookList');
const bookSubmitButton = document.querySelector('#bookSubmit');


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    //check if supplied pages is a number or other
    let numTest = Number(pages);
    ///relational comparison is always false when NaN is one of the operands
    if (Number.isNaN(numTest)) {
         this.pages = '';
    } else this.pages = pages;
    
    this.read = read;
    this.info = function() {
        let infoString = '';
        //convert the read boolean to read/unread
        infoString = title + ' by ' + author + ', ' + pages + ' pages, ' + ((read)?'read':'unread');
        return infoString;
    }
}
//three sample books to have the library be preloaded with something
const locklands = new Book('Locklands','Robert Jackson Bennet',544,true);
const uzumaki = new Book('Uzumaki','Junji Ito',110,true);
const cytonic = new Book('Cytonic','Brandon Sanderson',409,true);
myLibrary.push(locklands,uzumaki,cytonic);

function displayLibraryBooks(books){
    books.forEach( book => {
        //build table by creating a row, then inserting the relevant cell for each book
        let row = table.insertRow();
        let title = row.insertCell(0);
        title.textContent = book.title;
        let author = row.insertCell(1);
        author.textContent = book.author;
        let pages = row.insertCell(2);
        pages.textContent = book.pages;
        
        let read = row.insertCell(3);
        if (book.read) {
            read.innerHTML = '<input type=\"checkbox\" checked></input>'
        } else { read.innerHTML = '<input type=\"checkbox\" ></input>'}
        let trash = row.insertCell(4);
        
        trash.innerHTML = '<button>X</button>';
        
        // reference on cellIndex and rowIndex
        // https://stackoverflow.com/questions/45656949/how-to-return-the-row-and-column-index-of-a-table-cell-by-clicking
    });
    // This code block finds all buttons with a table ancestor and adds a function
    // to each that on click finds the closest table row to that button and deletes 
    // the row in the table with that row's index. 
    let buttons = document.querySelectorAll('table button');
    buttons.forEach(btn => {
        btn.addEventListener('click', ()=>{
            
            let deleteIndex = btn.closest('tr').rowIndex;
            if (confirm(`Are you sure you want to delete 
            ${table.rows[deleteIndex].cells[0].textContent }`)){
                table.deleteRow(deleteIndex);
                //remove book from library after deleting the table entry
                myLibrary.splice(deleteIndex-1,1)
                
            };
        });
    });

    let checks = document.querySelectorAll('table input');
    checks.forEach(check => {
        check.addEventListener('click',()=>{
            let rowUpdate = check.closest('tr').rowIndex;
            //invert read status between true and false on checkbox click
            myLibrary[rowUpdate-1].read = !myLibrary[rowUpdate-1].read;
        })
    })
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
        //delete the old library based on number of rows, 
        //but with i=1 the header row stays - then rebuild from myLibrary with new entry.
        //this likely doesn't scale well - consider modifying to append a new 
        //row onto existing table.

        const tableRows = table.rows.length;
        for (let i = 1; i < tableRows;i++) {
            table.deleteRow(1);
            
        };
        displayLibraryBooks(myLibrary);
        
        
});
