import React, {useEffect, useState} from 'react'
import logo from '../images/LOGO.png'
import  '../index.css'
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
import { bounce } from 'react-animations'
import Radium, {StyleRoot} from 'radium';
import { useHistory } from "react-router-dom";
import {update_cart_count} from "../store/actions";

const styles = {
    bounce: {
        animation: 'x 3s',
        animationName: Radium.keyframes(bounce, 'bounce')
    }
}
function Header(props) {

    const history = useHistory();

    const[cartCount,setCartCount]  = useState(0)
    useEffect(()=>{
            props.cart.map(item=>{
                props.count()
            })

    },[])
    useEffect(()=>{
       setCartCount(props.cart.length);
    },[props.cart,props.cartDb])
    return(
        <div>


            <nav class="navbar navbar-light bg-light center" style={{"height":"90px"}}>
                <span className="badge badge-pill badge-light">HOTLINE - 077 000 0001</span>

                <img src={logo} alt = ""class = "imageCenter"/>
                <Link to="/cart" style={{ textDecoration: 'none' }}>
                    <i className=" nav-link active fas fa-shopping-bag fa-lg  " style={{color: "#7CFC00 ", fontSize:"8"}}> <sup> <span style={{color: "#628C07 "}}class="badge badge-pill badge-light">{cartCount}</span></sup></i>
                </Link>
                <Link to="/wishlist" style={{ textDecoration: 'none' }}>
                    <i className=" nav-link active fas fa-heart fa-lg " style={{color: " #7CFC00 ", fontSize:"8"}}> <sup><span class="badge badge-pill badge-light" style={{color: "#628C07 "}}>{props.wishlistCount}</span></sup></i>
                </Link>
                <button type="button" className="btn btn-outline-light-green btn-sm" onClick={()=>{history.push("/login")}}>Login</button>
            </nav>



        </div>


    )
}

const mapStateToProps = state => {
    return {
       cartCount : state.itemInCartCount,
       wishlistCount : state.auth.wishListCount,
        cart:state.cart,
        cartDb : state.user.cart


    }
}

const mapDispatchToProps = dispatch => {
    return {
        count: ()=> dispatch(update_cart_count())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
