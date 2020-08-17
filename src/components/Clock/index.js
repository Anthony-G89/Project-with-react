import React from "react";




class Clock extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { apple: new Date() };
    //     console.log(props);


    // }
    state = {
        toggleButton: false
    };

    handleToggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

    
    render() {
        return (
            <div>
                

              {this.state.on && this.props.children}
              <button onClick={this.handleToggle}>Hide/Show</button>

                
                {/* <h1>Hello world</h1>
                <h2>It is {this.state.apple.toDateString()} </h2> */}
            </div>
        )
    }



}

export default Clock;