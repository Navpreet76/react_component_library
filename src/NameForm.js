import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }

    handleSubmit(event) {
        alert('I Aint scared of no damn  ' + this.input.current.value + ' up in here!');
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label><h1>Enter your Name Tough Guy</h1></label><br/>
                <label>
                    Name:
                    <input type="text" ref={this.input} />
                </label>
                <input type="submit" value="Submit" />

            </form>
        );
    }
}

export default NameForm;