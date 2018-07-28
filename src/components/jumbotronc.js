import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Button } from 'reactstrap';
import ModalExample from './../ModalExample';
const jumbotronc = (props) => {
	return(
		<div>
			<Jumbotron fluid>
				<Container fluid>
					<h1 className="display-3">React Components</h1>
					<hr className="my-2" />
					<p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
					<p className="lead">
						
					</p>
				</Container>	
			</Jumbotron>	
		</div>
	);
};

export default jumbotronc;