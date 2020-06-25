import React from "react";
import Header from "./Header";  //ヘッダーをインポート
import Footer from "./Footer";  //フッターをインポート

export default class Layout extends React.Component {
  constructor() {    //stateの定義
    super();
    this.state = {title: "Welcome"}
   }
   changeTitle(title){
     this.setState({title});
   }
  render() {
    // // const title = "welcome Tsutomu!"
    // setTimeout(
    //   () => {this.setState({title: "Welcome Tsutomu"});},  //2秒後にsetStateメソッドで置き換わる
    //   2000
    // )
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <button onClick={()=>{console.log('test')}} />
        <Footer />
      </div>    //変数も定義できる。例) const text = "テキストです";  <div>{text}</div> 
    );
  }
}