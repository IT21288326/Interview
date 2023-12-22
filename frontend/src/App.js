import logo from './logo.svg';
import './App.css';

import Footer from './componants/footer';
import Header from './componants/header';
import './componants/global.css'
import Body from './componants/body';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Body></Body>

      <Footer></Footer>
     
    </div>
  );
}

export default App;