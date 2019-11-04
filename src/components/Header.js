import React from "react";

class Header extends React.Component {
  setTest = e => {
    this.props.changeHandler({ search: e.target.value.toLowerCase() });
  };
  render() {
    return (
      <div className="nav">
        <div className="nav-inner">
          <div className="logo">
            <div></div>
          </div>
          <div className="search">
            <input label="search" onChange={this.setTest} placeholder="Search for books..."></input>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
