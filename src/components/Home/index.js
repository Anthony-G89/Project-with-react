import React from "react";
import "./style.css";
// import img from "../../Images/tic-tac-toe.png"


class home extends React.Component {

    state = {
        count: 0
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 20 });
    };

    handledecrement = () => {
        this.setState({ count: this.state.count - 10 })

        if(this.state.count === 0) {
            alert("Stop in the name of law!")
        }
    }





    render() {

        return (

            <div className="homeBody">

                <div className=" card text-center count">
                    <div className="card-header bg-primary text-white">
                        CLICK COUNTER!
                    </div>
                    <div className="card-body">
                        <p className="card-text">Click Count:{this.state.count}</p>
                        <button className="btn btn-primary" onClick={this.handleIncrement}>Increment Count</button>
                        <button className="btn btn-danger ml-2" onClick={this.handledecrement}>Decrement count</button>
                    </div>

                </div>

            </div>
        )
    }

}

export default home;
