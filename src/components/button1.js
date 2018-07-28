import React from 'react';
import { Button } from 'reactstrap';

const button = (props) => {
	return(
		<fragment>
                        <h1 class="text-warning">Regular size buttons</h1>
        		<Button color="warning">warning</Button>{' '}
                        <Button color="primary">primary</Button>{' '}
                        <Button color="success">success</Button>{' '}
                        <Button color="info">info</Button>{' '}
                        <Button color="danger">danger</Button>{' '}
                        <Button color="default">default</Button>{' '}
                </fragment>
	);
}

export default button;