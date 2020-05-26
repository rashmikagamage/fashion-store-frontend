import React, {useState,useEffect} from "react";
import  image1 from  '../images/ImageSlider/imageSlider1.jpg'
import  image2 from  '../images/ImageSlider/imageSlider2.jpg'
import {connect} from "react-redux";
import ReactLoading from 'react-loading';
import '../index.css'
import jwt_decode from 'jwt-decode';


import * as reduxActions from '../common/actions';
import {getCart} from "../store/actions";

function ImageSlider(props) {

   
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
        props.setUserDetails(decodedUser); // set user using localstorage
        props.getWishList(decodedUser.id); // set userWishList using localstorage
        props.getCart(decodedUser.id);
    }
    
    },[])

    if(props.items.length !==0 ){

        return(
            <center>
                <div>
                    <div class="imageSlider" >
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={image1} alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={image2} alt="Second slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={image2} alt="Third slide"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"> </span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"> </span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>


                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <div className="card" style={{width: "15rem"}}>
                                    <img className="card-img-top" src={"http://localhost:4000/uploads/"+props.items[0].images[0].productImage} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{props.items[0].name}</h5>
                                        <p className="card-text">{"LKR " + props.items[0].price + ".00"}</p>
                                        <a href="#" className="btn btn-pink">View Product</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col-sm">
                                <div className="card" style={{width: "15rem"}}>
                                    <img className="card-img-top" src={"http://localhost:4000/uploads/"+props.items[1].images[0].productImage} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{props.items[1].name}</h5>
                                        <p className="card-text">{"LKR " + props.items[1].price + ".00"}</p>
                                        <a href="#" className="btn btn-pink">View Product</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="card" style={{width: "15rem"}}>
                                    <img className="card-img-top" src={"http://localhost:4000/uploads/"+props.items[2].images[0].productImage} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{props.items[2].name}</h5>
                                        <p className="card-text">{"LKR " + props.items[2].price + ".00"}</p>
                                        <a href="#" className="btn btn-pink">View Product</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="card" style={{width: "15rem"}}>
                                    <img className="card-img-top" src={"http://localhost:4000/uploads/"+props.items[3].images[0].productImage} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{props.items[3].name}</h5>
                                        <p className="card-text">{"LKR " + props.items[3].price + ".00"}</p>
                                        <a href="#" className="btn btn-pink">View Product</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </center>


        )
    }
    else{

        return(
            <div align="center" className="mt-5">
                <ReactLoading type={"spinningBubbles"} color={"#e75480"} height={'10%'} width={'10%'}/>
            </div>
            )


    }


}

const mapStateToProps = state => {
    return {
        items: state.items,
        selectedItemsArray : state.selectedItemsArray,
        cartCheck : state.cartCheck,
        role : state.auth.role,
        userId : state.auth.userId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllProducts : () => dispatch(reduxActions.GetAllProducts()),
        getWishList : (userId) => dispatch(reduxActions.GetUserWishListAction(userId)),
        getCart : (userId) => dispatch(getCart(userId)),
        setUserDetails : (user) => dispatch(reduxActions.loginSuccessAction(user))

    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(ImageSlider)
