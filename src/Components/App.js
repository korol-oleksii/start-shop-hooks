import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Products from "./Products/Products";
import Delivery from "./Delivery/Delivery";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import BestSellers from "./BestSellers/BestSellers";

const App = (props) => {
    return (
        <div className="App">
            <Header dataHeader={props.data.header}/>
            <main className="main">
                <div className="main__container">
                    <Routes>
                        <Route path='/' element={<Home dataProducts={props.data.products}/>}/>
                        <Route path='/products' element={<Products dataProducts={props.data.products}/>}/>
                        <Route path='/bestsellers' element={<BestSellers/>}/>
                        <Route path='/delivery' element={<Delivery/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                    </Routes>
                </div>
            </main>
            <Footer dataFooter={props.data.footer}/>
        </div>
    );
}

export default App;
