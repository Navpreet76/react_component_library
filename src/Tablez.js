import React from 'react';
import { Table } from 'reactstrap';


export default class Tablez extends React.Component {
	render(){
		return(
			<fragment>
				<h1 class="text-primary">Dark Table</h1>
				<Table dark>
					<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Navpreet</td>
							<td>Chhina</td>
							<td>@example</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>Lebron</td>
							<td>James</td>
							<td>@lakers</td>
						</tr>
					</tbody>
				</Table>
				<br/>
				<br/>
				<h1 class="text-danger">Striped Table</h1>
				<Table striped>
					<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Navpreet</td>
							<td>Chhina</td>
							<td>@example</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>Lebron</td>
							<td>James</td>
							<td>@lakers</td>
						</tr>
					</tbody>
				</Table>
				<h1 class="text-warning">Default Table</h1>
				<Table>
					<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Navpreet</td>
							<td>Chhina</td>
							<td>@example</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>Lebron</td>
							<td>James</td>
							<td>@lakers</td>
						</tr>
					</tbody>
				</Table>
			</fragment>		
		);
	}
}