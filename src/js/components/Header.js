import React from "react";
import Title from "./Header/title";  //Header下のtitle.jsをインポート

export default class Header extends React.Component {
  handleChange(e){
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  render() {
    return(
      // <div>header</div>
      <div>
        <Title title={this.props.title} />
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}