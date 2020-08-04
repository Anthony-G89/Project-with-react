import React from "react";
import "./style.css";


class Form extends React.Component {

    // const closingForm = () => {
    //    alert("clicked on")
    // }

    // constructor() {
    //     super()
    //     this.state= {
    //         showMe: true
    //     }
    // }

    Window() {
        alert("clicked on")
    }
    
   



    render() {
        return (
            <div>
                <form className="userForm">
                <i className="fas fa-window-close closeWindow"  onClick={this.Window} ></i>
                    <div className="form-group">
                        <label className="userEmail">Email Address</label>
                        <input type="email" className="form-control userInput" />
                        <smal className="emailHelp">We'll never share your email with anyone else.</smal>
                    </div>
                    <div className="form-group">
                        <label className=" userEmail">Password</label>
                        <input type="password" className="form-control userPassword" />
                    </div>
                    <div className="form-check pl-0">
                        <label className="form-check">
                            <input type="checkbox" />Remember Me
                    </label>
                        <button type="submit" className=" btn btn-primary">Submit</button>

                    </div>

                </form>
            </div>
        )
    }
}

export default Form;