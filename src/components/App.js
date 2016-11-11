import React from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import FullPage from './FullPage';

class App extends React.Component {
  render() {
    return (
      <FullPage />
    );
  }
}
// class App extends React.Component {
//   render() {
//     return (
//       <div className="flexMaster">
//         <Header
//           className="header"
//          />
//         <Content />
//         <Footer
//           className="footer"
//         />
//       </div>
//     );
//   }
// }

export default App;
