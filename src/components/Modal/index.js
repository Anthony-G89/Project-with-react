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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget justo eu elit accumsan sodales. Duis blandit maximus nisi eu pellentesque. Fusce pharetra quam nec leo auctor, nec varius lorem condimentum. Cras fermentum nulla purus, vel aliquam ante convallis sit amet. Donec commodo leo ante, non tristique magna semper et. Phasellus metus tellus, aliquet in lacus sed, volutpat maximus felis. Duis accumsan molestie sapien, sed gravida arcu iaculis eu. Proin lacinia orci a elit scelerisque, id pretium leo auctor.</p>
                </div>
                <div className="modal-footer">
                    <button onClick={close} className="close-modal-btn">Close</button>
                </div>

            </div>


        </div>
    )



}

export default Modal;
