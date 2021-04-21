
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from './home/Home';
import { NaviBar } from './components/NaviBar';
import { Header } from './home/Header';
import { HomeBody } from './home/HomeBody';
import { Rice } from './components/Rice';
import { InsertHomeBody } from './components/InsertHomeBody';
import { InsertList } from './components/InsertList';
import { PostRice } from './components/PostRice';
import { Lentils } from './components/Lentils';
import { PostLentil } from './components/PostLentil';


function App() {
  return (

    <BrowserRouter>
      <div className="" style={{ fontFamily: '' }}>


        <Header />
        <NaviBar />



        <div className="flex justify" style={{}}>
          <Route exact path="/" component={HomeBody} />
          <Route path="/rice" component={Rice} />
          <Route path="/inserthomebody" component={InsertHomeBody} />
          <Route path="/insert" component={InsertList} />
          <Route path="/postrice" component={PostRice} />
          <Route path="/lentils" component={Lentils} />
          <Route path="/postlentils" component={PostLentil} />



        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
