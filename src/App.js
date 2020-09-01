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
    try {
      if (authors.length <= 2) {
        authors = authors.join(" and ");
      }
      else if (authors.length > 2) {
        let lastAuthor = " and " + authors.slice(-1);
        authors.pop();
        authors = authors.join(", ");
        authors += lastAuthor;
      }
      return authors;
    }
    catch (error) {
      return <span>null</span>;
    }
  };

  const getRating = ratings => {
    if (ratings) {
      return ratings;
    }
    else {
      return <span>null</span>
    }
  }

  return (
    <div className="container mt-5">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="bookInput">Enter Book Name</label>
          <input className="form-control" id="bookInput"
            type="search"
            placeholder="java, python, etc.,"
            value={searchTerm}
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
      <ul className="list-group list-group-flush mt-5 mb-5">
        {books.items ? books.items.map((book, index) => {
          return (
            <li key={index} className="list-group-item d-flex bg-light">
              <a href={`http://books.google.co.in/books?id=${book.id}`} target="_blank" rel="noopener noreferrer">
                <img
                  width="130"
                  height="200"
                  alt={`${book.volumeInfo.title} book`}
                  src={`http://books.google.com/books/content?id=${
                    book.id
                    }&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                />
              </a>
              <span className="ml-3">
<<<<<<< HEAD
                <div>
                  <a className="font-weight-bold" href={`http://books.google.co.in/books?id=${book.id}`} target="_blank" rel="noopener noreferrer">{book.volumeInfo.title}</a>
                  <div>By {bookAuthors(book.volumeInfo.authors)}</div>
=======
                <div className="font-weight-bold">
                  <a href={`http://books.google.co.in/books?id=${book.id}`} target="_blank" rel="noopener noreferrer">
                    {book.volumeInfo.title}
                    <div>By {bookAuthors(book.volumeInfo.authors)}</div>
                  </a>
>>>>>>> 01f4ddfee572ac985c9e35d1d75a7a84733cbde5
                </div>
                <div className="mt-3">Published Date : {book.volumeInfo.publishedDate}</div>
                <div>Total Pages : {book.volumeInfo.pageCount}</div>
                <div>Rating : {getRating(book.volumeInfo.averageRating)}/5</div>
              </span>
            </li>
          );
        }) : <span className="text-danger">Try different keyword...</span>}
      </ul>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default App;
