import React from 'react';
import axios from 'axios';

class PlayerForm extends React.Component {
    constructor(props) {
        super(props);
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.phone = React.createRef();
        this.email = React.createRef();
    }

    submitPlayer(event) {
        event.preventDefault();
        
        axios.post('http://localhost:4000/players', {
            firstName: this.firstName.current.value,
            lastName: this.lastName.current.value,
            phone: this.phone.current.value,
            email: this.email.current.value,
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        });
    }

    render() { 
        return ( 
            <div className="row">
                <h1 className="center">Add a new player</h1>
                <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input ref={this.firstName} type="text" />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input ref={this.lastName} type="text" />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input ref={this.phone} type="number" />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-field col s6">
                            <input ref={this.email} type="text" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit"
                        name="action">Add player</button>
                </form>
            </div>
         );
    }
}
 
export default PlayerForm;