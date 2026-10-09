// const express = require("express")
// const app = express()

// app.get('/about/:username', (req, res) => {
//     const {username} = req.params
//     res.send(`About ${username}`)
// })
// app.get('/contact', (req, res)=>{
//     res.send("this is contact page ")
// })    

// app.get("/", (req, res) => {
//     res.send("Home page")
// })


const express = require("express")

const app = express()

const BookStore = [
    {id:1, name:"The Great Gatsby", author:"F. Scott Fitzgerald"},
    {id:2, name:"To Kill a Mockingbird", author:"Harper Lee"},
    {id:3, name:"1984", author:"George Orwell"},
    {id:4, name:"Pride and Prejudice", author:"Jane Austen"},
    {id:5, name:"The Catcher in the Rye", author:"J.D. Salinger"},
]

app.use(express.json());


app.get('/book', (req, res)=>{
    res.send(BookStore);
})

app.get("/book/:id", (req, res)=>{
    const {id} = req.params
    const Book = BookStore.find(book => book.id === Number(id))
    res.send(Book)
})

app.post("/book", (req, res)=>{
    console.log(req.body);
    BookStore.push(req.body);
    res.send("Book added successfully")
})

app.delete('/book/:id', (req, res) => {
  const bookID = parseInt(req.params.id);
  const index = BookStore.findIndex(book => book.id === bookID);

  if (index !== -1) {
    BookStore.splice(index, 1);
    return res.status(200).json({ message: 'Book deleted successfully', BookStore });
  } else {
    return res.status(404).json({ message: 'Book not found' });
  }
});

console.log(BookStore)







app.listen(4000, () => {
    console.log("Server started on port 4000")
})
