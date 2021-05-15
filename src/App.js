
import './App.css';
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Home from './home/Home';
import { NaviBar } from './components/NaviBar';
import { Header } from './home/Header';
import { Rice } from './components/Rice';
import { InsertHomeBody } from './components/InsertHomeBody';
import { InsertList } from './components/InsertList';
import { PostRice } from './components/PostRice';
import Lentils from './components/Lentils';
import { PostLentil } from './components/PostLentil';
import { PostOil } from './components/PostOil';
import CartHeader from './cart/CartHeader';
import { Checkout } from './cart/Checkout';
import { Footer } from './home/Footer';
import { useState } from 'react';
import container1 from './containers/container1';
import routerroutes from "./routerroutes"
import history from './containers/history';
import Component1 from './components/Component1';
import Component2 from './components/component2';
import component3 from './components/component3';
import { connect } from 'react-redux';
import { addBasket } from "./store/actions/actions"
import { CartBasket } from './cart/CartBasket';

function App() {
  // function test() { console.log("test") }
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [basketNumbers, setBasketNumbers] = useState(0);

  function test() { console.log("test") };

  const onAdd = (product) => {
    console.log(product);
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

  const addToBasket = (item) => {
    console.log(' App Button clicked' + basketNumbers);
    setBasketNumbers(basketNumbers + 1);

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

    <Router history={history}>
      <div className="" style={{ fontFamily: '' }}>


        <Header cartItems={cartItems} onAdd={onAdd} addToBasket={addToBasket} basketNumbers={basketNumbers} />
        <NaviBar />



        <div className="flex justify" style={{}}>
          <Switch>
            <Route exact path="/"><Home onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} addToBasket={addToBasket} /> </Route>
            {/* <Route path="/rice" component={Rice} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} addToBasket={addToBasket} /> */}
            <Route path="/rice" render={props => <Rice addToBasket={addToBasket} onAdd={onAdd} cartItems={cartItems} />} />
            <Route path="/inserthomebody" component={InsertHomeBody} />
            <Route path="/insert" component={InsertList} />
            <Route path="/postrice" component={PostRice} />
            {/* <Route path="/lentils" component={Lentils} addToBasket={addToBasket} test={test} /> */}
            <Route path="/lentils" render={props => <Lentils addToBasket={addToBasket} />} />
            <Route path="/postlentils" component={PostLentil} />
            <Route path="/postoils" component={PostOil} />
            {/* <Route path="/cart" component={CartHeader} cartItems={cartItems} addToBasket={addToBasket} /> */}
            <Route path="/cart" render={props => <CartHeader addToBasket={addToBasket} onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} />} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/container1" component={container1} />

            {/* <Route path="/component/:id" render={(props) => <Component1 {...props} />} /> */}

            {/* <Route path="/component1" component={Component1} /> */}
            <Route path="/component/:id" render={props => <Component1 {...props} />} />
          </Switch>

        </div>
        {/* <div className="margintop flex justify ">
          {cartItems.length > 0 ? <div className="padding2 width80 block flexcol alignitems " style={{ maxWidth: "290px" }}>
            <CartBasket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}

              key={cartItems.id} />
          </div> : null}
        </div> */}
        <Footer />
      </div>

    </Router >
  );
}

const mapStateToProps = state => {
  return {
    basketProps: state.basketState
  }
}

export default connect(mapStateToProps, { addBasket })(App);
