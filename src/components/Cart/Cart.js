import React, {useEffect, useState} from 'react'
import '../../index.css'
import {connect} from "react-redux";
import CartItem from "./CartItem";
import {deductQuantity, updateTotal, zeroTotal} from "../../store/actions";

function Cart(props) {


    useEffect(()=>{
        props.resetTotal(0);
    },[])

    useEffect(() => {

        props.cart.map(item => {
            props.changeTotal(item.price * ((100 - item.discount) / 100));
        })
    }, []);
    return (
        <div>

            <table className="tableContainer">
                <tr>
                    <td>
                        <div>
                            {
                                props.cart.map(item =>
                                    <CartItem
                                        item={item}
                                    > </CartItem>
                                )
                            }
                        </div>

                    </td>

                    <td className="cardStick position-relative">
                        <div className="card text-dark bg-light mb-3 mt-5   paymentCard">
                            <div className="card-header">Payment</div>
                            <div className="card-body">
                                <h5 className="card-title">Total : {props.cartTotal} LKR</h5>
                                <p className="card-text">We make deliveries around Island.Please make sure you give right details to get a faster delivery  </p>
                                <button className=" btn btn-sm btn-outline-pink " onClick={()=>{
                                    props.deductQ(props.cart)
                                }}>Proceed to Payment</button>
                            </div>
                        </div>

                    </td>


                </tr>
            </table>


        </div>

    )

}


const mapStateToProps = state => {

    return {
        cart: state.cart,
        selectedItemsArray: state.selectedItemsArray,
        cartTotal: state.cartTotal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeTotal : (price) => dispatch(updateTotal(price)),
        resetTotal : (price) => dispatch(zeroTotal(price)),
        deductQ : (cart) => dispatch(deductQuantity(cart))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
