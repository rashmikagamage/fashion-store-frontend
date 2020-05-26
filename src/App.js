import React, { Component , useEffect } from "react";
import HomePage from "./components/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/Cart/Cart";
import ItemContainer from './components/ItemContainer';
import ImageSlider from "./components/ImagSlider";
import viewItem from "./components/ViewItem/ViewItem"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Footer from "./components/Footer";
import Discount from "./components/Discount/Discount";
import SelectedProducts from "./components/SelectedProducts";
import login from "./components/SignInSide";
import signup from "./components/SignUp"
// import NotFound from './components/NotFound/PageNotFound';
import PrivateRoute from './PrivateRoutes/PrivateRouter';
import PrivateStoreManagerRoute from "./PrivateRoutes/PrivateRouerForStoreManager";
import jwt_decode from 'jwt-decode';
import {connect} from "react-redux";
import * as reduxActions from './common/actions';
import wishList from "./components/WishList/WishList";
import {getCart} from "./store/actions";

function App (props) {

    useEffect(() => {

        props.getAllProducts();
    
        // if (Date.now() >= decodedUser.exp * 1000) { // check token expired or not
        //     console.log('expired');
        //   }
        //   else{
        //     console.log('not expired');
        //   }
    
        const token = localStorage.getItem('jwtToken');
        if(token === null || token === undefined)
        {
            console.log('guest user');
        }
        else{
            const decodedUser = jwt_decode(token);
            //console.log(decodedUser);
            props.setUserDetails(decodedUser); // set user using localstorage
            props.getWishList(decodedUser.id); // set userWishList using localstorage
            props.getCart(decodedUser.id)
        }
        
        },[])
  
    return (


        <Router>
            <div>
                <HomePage/>
                    <switch>
                        <Route path = "/" exact component ={ImageSlider}/>
                        <Route path="/s" exact component={SelectedProducts}/>
                        <Route path = "/products" exact component ={ItemContainer}/>
                        <Route path ="/viewItem" exact component={viewItem}/>
                        <PrivateRoute exact path="/cart"  component={Cart}></PrivateRoute>
                        <PrivateRoute exact path="/wishlist" component={wishList}></PrivateRoute>
                        <Route path="/addDiscount" exact component={Discount}/>
                        <Route path ="/login" exact component={login}/>
                        <Route path ="/signup" exact component={signup}/>
                        <Route path ="/AddDiscount" exact component={Discount}/>
                    </switch>
                <Footer/>
            </div>
        </Router>

    );
}


const mapStateToProps = state => {
    return {
       
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
       
      getAllProducts : () => dispatch(reduxActions.GetAllProducts()),
      getWishList : (userId) => dispatch(reduxActions.GetUserWishListAction(userId)),
      setUserDetails : (user) => dispatch(reduxActions.loginSuccessAction(user)),
        getCart : (userId) => dispatch(getCart(userId))
    }
  }
  
  export default  connect(mapStateToProps, mapDispatchToProps)(App)
  
  
