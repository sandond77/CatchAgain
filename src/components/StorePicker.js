import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
	myInput = React.createRef();

	goToStore = event => {
		event.preventDefault();
		console.log(this.myInput.current.value)
	};
	
	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter a Store</h2>
				<input 
					type="text" 
					required 
					placeholder="Store Name" 
					ref={this.myInput} 
					defaultValue={ getFunName() }
				/>
				<button type="submit"> Visit Store ➡️ </button>
			</form>
		);
	}
}

export default StorePicker;