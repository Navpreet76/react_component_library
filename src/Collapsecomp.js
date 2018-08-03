import React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Collapsecomp extends React.Component {
	constructor(props){
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = { collapse:false };
	}

	toggle(){
		this.setState({ collapse: !this.state.collapse });
	}

	render() {
		return (
			<div>
				<Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem'}}>Toggle</Button>
				<Collapse isOpen={this.state.collapse}>
					<Card>
						<CardBody>
							Fusce ut nulla vitae libero facilisis lobortis vitae quis purus. Morbi finibus, nulla ac maximus faucibus, tortor nibh pulvinar orci, vitae feugiat mauris arcu non dolor. Vestibulum ut bibendum nulla, nec finibus leo. Ut vitae libero sit amet eros pulvinar ultricies. Curabitur pellentesque ultrices tempus. Curabitur id enim at nibh mollis pretium non mattis turpis. Cras imperdiet tellus vitae nulla finibus, sed consequat turpis commodo. Fusce nec sapien consectetur, vestibulum nisi sit amet, mollis dui. Nulla urna felis, vestibulum non elit a, efficitur mollis lorem. Sed mattis, odio quis tempus vehicula, odio ante ultricies ipsum, aliquet interdum diam arcu nec ante. Morbi placerat ultricies lectus a facilisis. Pellentesque sollicitudin hendrerit leo sit amet scelerisque. Integer efficitur sodales auctor. Sed id mi eu nisi ornare fringilla ut ac sem.
						</CardBody>
					</Card>
				</Collapse>
			</div>
		);
	}
}
export default Collapsecomp;