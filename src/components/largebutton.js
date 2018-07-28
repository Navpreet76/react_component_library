import React from 'react';
import { Button } from 'reactstrap';

const largebutton = (props) => {
	return(
		<fragment>
		<h1 class="text-success">Large Buttons</h1>
			<Button color="primary" size="lg">Large Button</Button>{' '}
			<Button color="secondary" size="lg">Large Button</Button>
		</fragment>
	);
}
export default largebutton;