import React,{useState} from "react";
import Modal from "react-bootstrap/Modal";
import {cart_check_false, cart_check_true} from "../store/actions";
import {connect} from "react-redux";

function TestModel(props) {



    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function onclickOne(){
        props.updateCartCheck();
        handleClose();
    }

    return (

        <div>

            <Modal show={show} onHide={handleClose}>

                <Modal.Body>Already in the Cart</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-outline-pink btn-sm" onClick={handleClose}>
                        Continue Shopping
                    </button>
                    <button className="btn btn-outline-pink btn-sm"  onClick ={props.updateCartCheck}>
                        Go to Cart
                    </button>
                </Modal.Footer>
            </Modal>

        </div>


    );
}

const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return {

        updateCartCheck : () => { cart_check_false() }
    }
};

export default connect(mapDispatchToProps,mapStateToProps)(TestModel);
