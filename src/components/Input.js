import React, { Component } from 'react';
// import PropTypes from 'prop-types';


class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        const { value } = event.target;
        this.setState({
            name: value,
        });
    }

    render() {
        const { name } = this.state;
        return (
            <div>
                <span>Enter your name</span>
                <input onChange={this.handleChange}/>
                <br/>
                <span style={{color:'#5bb7db', fontSize: '16px'}}>{name}</span>
            </div>
        );
    }
}

export default Input;

{/* Input.propTypes = {
    handleChange: PropTypes.func.isRequired,
} */}