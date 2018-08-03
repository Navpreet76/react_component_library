import React from 'react';
const components = [ComponentA, ComponentB, ComponentC] // references to components

class DynamicList extends React.Component {
		 
 render(){     
  	return (
	    <div>
	      {components.map((comp, i) => React.createElement(comp, { key: i})}
	    </div>
  		);
	}
}
export default DynamicList;

    