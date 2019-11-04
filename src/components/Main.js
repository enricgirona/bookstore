import React from "react";

let Main = props => {
  return (
    <div className="container">
      <div className="container-inner">
        {props.books.map(book => (
          <div key={book.title} className="book">
            <div className="inner-book">
              <div className="front">
                <img src={book.cover} alt="book-cover"></img>
              </div>
              <div className="back">
                <div className="inner-back">
                  <h3>{book.title}</h3>
                  <p>{book.description}</p>

                  <a className="buttonRead" href={book.detail} data-fancybox>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
