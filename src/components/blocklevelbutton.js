import React from 'react';
import { Button } from 'reactstrap';

const blocklevelbutton = (props) => {
	return(
		<fragment>
			<h1 class="text-primary">Block Level buttons</h1>
			<Button color="warning" size="lg" block>Block Level Button</Button>
			<Button color="danger" size="lg" block>Block Level Button</Button>
			<Button color="dark" size="lg" block>Block Level Button</Button>
			<Button color="primary" size="lg" block active>Block Level Button</Button>
		</fragment>	

	);
}

export default blocklevelbutton;