import React from "react";

export default class Title extends React.Component{    //classはファイル名と同じ名前？？ この構文は丸暗記
  render(){
    return(
      <h1>{this.props.title}</h1>
    );
  }
} 