import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

// class Layout extends React.Component {
// //   render() {
// //     return (
// //       <div>
//         <h1>Welcome!</h1>
//         <h1>It works!</h1>

//       </div>
//     );
//   }
// }
// // const text = "テキスト";

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);