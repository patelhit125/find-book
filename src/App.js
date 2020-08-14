import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState({ items: [] });
  const onInputChange = e => {
    setSearchTerm(e.target.value);
  };

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
    const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    setBooks(result.data);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    fetchBooks();
  };

  const bookAuthors = authors => {
    if (authors.length <= 2) {
      authors = authors.join(" and ");
    } else if (authors.length > 2) {
      let lastAuthor = " and " + authors.slice(-1);
      authors.pop();
      authors = authors.join(", ");
      authors += lastAuthor;
    }
    return authors;
  };

  return (
    <div className="container mt-5">
      <form onSubmit={onSubmitHandler}>
      <div class="form-group">
      <label for="bookInput">Enter Book Name</label>
          <input className="form-control" id="bookInput"
            type="search"
            placeholder="microservice, restful design, etc.,"
            value={searchTerm}
            onChange={onInputChange}
          />
          </div>
          <button type="submit"  className="btn btn-primary">Search</button>
      </form>
      <ul className="list-group list-group-flush mt-5 mb-5">
        {books.items.map((book, index) => {
          return (
            <li key={index} className="list-group-item d-flex bg-light">
                <img
                  width="130"
                  height="200"
                  alt={`${book.volumeInfo.title} book`}
                  src={`http://books.google.com/books/content?id=${
                    book.id
                  }&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                />
                <span className="ml-3">
                  <div className="font-weight-bold">{book.volumeInfo.title}</div>
                  <div className="mt-3">Author : {bookAuthors(book.volumeInfo.authors)}</div>
                  <div>Published Date : {book.volumeInfo.publishedDate}</div>
                  <div>Total Pages : {book.volumeInfo.pageCount}</div>
                  <div>Rating : {book.volumeInfo.averageRating}/5</div>
                  <div>Language : {book.volumeInfo.language}</div>
                </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default App;