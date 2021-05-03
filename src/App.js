
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from './home/Home';
import { NaviBar } from './components/NaviBar';
import { Header } from './home/Header';
// import { HomeBodyC } from './home/HomeBodyC';
import { Rice } from './components/Rice';
import { InsertHomeBody } from './components/InsertHomeBody';
import { InsertList } from './components/InsertList';
import { PostRice } from './components/PostRice';
import { Lentils } from './components/Lentils';
import { PostLentil } from './components/PostLentil';
import { PostOil } from './components/PostOil';
import { CartHeader } from './cart/CartHeader';
import { Checkout } from './cart/Checkout';
import { Footer } from './home/Footer';


function App() {
  function test() { console.log("test") }
  return (

    <BrowserRouter>
      <div className="" style={{ fontFamily: '' }}>


        <Header />
        <NaviBar />



        <div className="flex justify" style={{}}>
          <Route exact path="/" component={Home} />
          <Route path="/rice" component={Rice} />
          <Route path="/inserthomebody" component={InsertHomeBody} />
          <Route path="/insert" component={InsertList} />
          <Route path="/postrice" component={PostRice} />
          <Route path="/lentils" component={Lentils} />
          <Route path="/postlentils" component={PostLentil} />
          <Route path="/postoils" component={PostOil} />
          <Route path="/cart" component={CartHeader} />
          <Route path="/checkout" component={Checkout} />



        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
