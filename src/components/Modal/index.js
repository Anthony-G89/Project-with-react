import React from "react";
import "./style.css";
import person from  "../../Images/surprised-person.png";



const Modal = ({ show, close }) => {





    return (
        <div className="modal-wrapper"
            style={{
                transform: show ? "translateY(0vh)" : "translateY(-100vh)",
                opacity: show ? "1" : "0"
            }}
        >
            <div className="modal-header">
                <p>welcome to my first modal</p>
                <span onClick={close} className="closeWindowBtn">X</span>
            </div>

            <div className="modal-content">
                <div className="modal-body">
                    <h3>SURPRISE!!</h3>
                    <img src={person} className="surprised"  />
                </div>
                <div className="modal-footer">
                    <button onClick={close} className="close-modal-btn">Close</button>
                </div>

            </div>


        </div>
    )



}

export default Modal;
