import React,{useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import {MDBBtn} from "mdbreact";
import {Link} from "react-router-dom";


function CartModal(props) {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Footer>
                <table>
                    <tr>
                        <td><Link to="/cart" style={{ textDecoration: 'none' }}>
                         <MDBBtn className="fal fa-shopping-cart fa-2x mb-1 mt-3 btn btn-white"  onClick={()=>{
                        }}> Go to Cart </MDBBtn></Link>
                        </td>
                        <td>
                            <MDBBtn className="fal fa-shopping-bag fa-2x mb-1 mt-3 btn btn-white"  onClick={
                                props.onHide
                            }> Continue Shopping</MDBBtn>
                        </td>
                    </tr>
                </table>
            </Modal.Footer>
        </Modal>
    );
}

export default (CartModal);
