import React, { Component } from "react";
import Button from '@material-ui/core/Button';

class UserButton extends Component{
    render(){
        return(
            <Button className="button" onClick={() => {window.location = 'http://www.google.com'}} variant="contained" color="primary">
                Drivers
            </Button>
        )
    }
}
class Home extends Component {

    render() {
        return (
            <div>
                <h2>HELLO</h2>
                <p>Cras facilisis urna ornare ex volutpat, et
                    convallis erat elementum. Ut aliquam, ipsum vitae
                    gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                    metus nec massa. Maecenas hendrerit laoreet augue
                    nec molestie. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus.</p>

                <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
            </div>
        );
    }
}


 
export default Home;