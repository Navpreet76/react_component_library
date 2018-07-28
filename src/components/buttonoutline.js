import React from 'react';
import { Button } from 'reactstrap';

const buttonoutline = (props) => {
	return (
		<fragment>
			<h1 class="text-info">Outlined Buttons</h1>
			<Button outline color="warning">warning</Button>{' '}
	        <Button outline color="primary">primary</Button>{' '}
	        <Button outline color="success">success</Button>{' '}
	        <Button outline color="info">info</Button>{' '}
	        <Button outline color="danger">danger</Button>{' '}
	        <Button outline color="default">default</Button>{' '}
	    </fragment>
	);
}
export default buttonoutline;