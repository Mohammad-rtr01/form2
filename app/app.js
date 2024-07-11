let userForm = document.querySelector(".userForm");
let bookList = [];

userForm.addEventListener("submit" , (e) => {

const newBook = {
    name : e.target.bookName.value ,
    writer : e.target.writer.value ,
    genre : e.target.genre.value ,
    price : e.target.price.value ,
}

bookList.push(newBook)
console.log(bookList)

let con = document.querySelector('.con')
 
bookList.forEach((items , index) => {

let span = document.createElement('span')

span.style.padding = '10px'
span.innerText = `${index +1} : ${items}`
con.appendChild(span);
})

e.preventDefault();
})