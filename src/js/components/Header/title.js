import React from "react";

export default class Title extends React.Component{    //classはファイル名と同じ名前？？ この構文は丸暗記
  constructor(props){
    super(props);
    this.state={name:'Welcome'};
  }
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.get_result(3)}</h2>
        {/* <h2>{this.state.name}</h2> */}
      </div>
      
    );
  }
  get_result(num){
    return 1 + num;
  }
} 