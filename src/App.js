
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from './home/Home';
import { NaviBar } from './components/NaviBar';
import { Header } from './home/Header';
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
import { useState } from 'react';
import "./default.css"


function App() {
  // function test() { console.log("test") }
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);


  // function test() { console.log("test") };

  const onAdd = (product) => {
    // console.log(product.id);
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist) {
      setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
      // console.log(exist);
      // console.log(cartItems);
    }
    else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);

    }
  }


  const onRemove = (product) => {
    const exist = cartItems.find((x) => { return x.id === product.id })

    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => { return x.id !== product.id }))
    }
    else {
      setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
    }
  }
  return (

    <BrowserRouter>
      <div className="" style={{ fontFamily: '' }}>


        <Header />
        <NaviBar />
        <Switch>


          <div className="flex justify" style={{}}>
            <Route exact path="/"><Home onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} /> </Route>
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
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
