import React from 'react';

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <h1 class="text-danger">The Water has reached its Boiling point!!!</h1>;
    }
    return <h4>The Water is not Boiling</h4>;
}

class Calculator1 extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }
    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        return(
            <fieldset>
                <legend>Enter Temperature in Celsius:</legend>
                    <input
                    value={temperature}
                    onChange={this.handleChange} />
                    <BoilingVerdict 
                        celsius={parseFloat(temperature)} />
                    </fieldset>
        );
    }
}

export default Calculator1;