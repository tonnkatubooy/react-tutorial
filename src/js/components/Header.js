import React from "react";
import Title from "./Header/title";  //Header下のtitle.jsをインポート

export default class Header extends React.Component {
  render() {
    return(
      // <div>header</div>
      <div>
        <Title title={this.props.title} />
      </div>
    );
  }
}