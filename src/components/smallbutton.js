import React from 'react';
import { Button } from 'reactstrap';

const smallbutton = (props) => {
	return(
		<fragment>
		<br />
		<h1 class="text-danger">Small buttons</h1>
		<Button color="primary" size="sm">small button</Button>{' '}
		<Button color="success" size="sm">small button</Button>{' '}
		<Button color="info" size="sm">small button</Button>{' '}
		<Button color="warning" size="sm">small button</Button>{' '}
		<Button color="danger" size="sm">small button</Button>{' '}
		</fragment>
	);
}

export default smallbutton;