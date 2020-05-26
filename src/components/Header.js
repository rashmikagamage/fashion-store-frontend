import React, {useEffect, useState} from 'react'
import logo from '../images/LOGO.png'
import  '../index.css'
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
import {update_cart_count} from "../store/actions";
function Header(props) {

    useEffect(()=>{
            props.cart.map(item=>{
                props.count()
            })

    },[])

    return(
        <div>


            <nav class="navbar navbar-light bg-light center" style={{"height":"90px"}}>
                <p>Hotline : 0771792083</p>
                <img src={logo} alt = ""class = "imageCenter"/>
                <Link to="/cart" style={{ textDecoration: 'none' }}>
                <i className=" nav-link active fas fa-shopping-bag fa-lg  " style={{color: " #FF007F", fontSize:"8"}}> <sup>{props.cartCount}</sup></i>
                </Link>
                <Link to="/wishlist" style={{ textDecoration: 'none' }}>
                <i className=" nav-link active fas fa-heart fa-lg  "style={{color: " #FF007F", fontSize:"8"}}> <sup>{props.wishlistCount}</sup></i>
                </Link>
                <i className=" nav-link active fas fa-user fa-lg " style={{color: " #FF007F"}}> </i>
            </nav>



        </div>


    )
}

const mapStateToProps = state => {
    return {
       cartCount : state.itemInCartCount,
       wishlistCount : state.auth.wishListCount,
        cart:state.cart,


    }
}

const mapDispatchToProps = dispatch => {
    return {
        count: ()=> dispatch(update_cart_count())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
