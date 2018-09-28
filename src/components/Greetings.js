import React from 'react';

const UserGreeting = (props) => {
    return(
        <fragment>
            <h1>Welcome Back!!</h1>
            <p>You are seeing this message because you are logged In!</p>
        </fragment>
    );
}
const GuestGreeting = (props) => {
    return(
        <fragment>
            <h1>Please Sign Up or Sign In</h1>
            <p>You are seeing this message because you are not logged In!</p>
        </fragment>
    );
}

const Greetings = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}


export default Greetings;