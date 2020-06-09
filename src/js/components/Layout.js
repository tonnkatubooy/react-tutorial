import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
//   // constructor() {
//   //   super();
//   //   this.name = "Tsutomu";
//    }
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>    //変数も定義できます。例) const text = "テキストです";  <div>{text}</div> 
    );
  }
}