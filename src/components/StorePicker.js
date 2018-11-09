import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends Component {
	myInput = React.createRef();

	static propTypes = {
		history: PropTypes.object
	}
	goToStore = event => {
		event.preventDefault();
		const storeName=this.myInput.current.value;
		this.props.history.push(`/store/${storeName}`);
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
				<button type="submit"> Visit Store <span role="img" aria-label="right-arrow">➡️</span></button>
			</form>
		);
	}
}

export default StorePicker;