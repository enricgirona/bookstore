import React from "react";
import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends React.Component {
  state = {
    books: [],
    search: ""
  };

  componentDidMount() {
    fetch("https://api.myjson.com/bins/zyv02")
      .then(response => response.json())
      .then(data => {
        this.setState({ books: data.books });
      });
  }

  changeHandler = props => {
    this.setState(props);
  };

  render() {
    let filteredBooks = this.state.books.filter(book => book.title.toLowerCase().includes(this.state.search));
    return (
      <div>
        <Header changeHandler={this.changeHandler} />
        <Main books={filteredBooks} />
      </div>
    );
  }
}

export default App;
