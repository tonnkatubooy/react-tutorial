import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {name: "Tsutomu"}
  //  }
  render() {
    const title = "welcome Tsutomu!"
    return (
      <div>
        <Header title={title} />
        <Header title={"thank you!"} />
        <Footer />
      </div>    //変数も定義できる。例) const text = "テキストです";  <div>{text}</div> 
    );
  }
}