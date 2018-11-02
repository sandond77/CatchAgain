import React, { Component } from 'react';

class AddFishForm extends Component {
	nameRef = React.createRef();
	priceRef = React.createRef();
	statusRef = React.createRef();
	descRef = React.createRef();
	imageRef = React.createRef();

	createFish = (event) => {
		event.preventDefault();
		const fish = {
			name: this.nameRef.current.value,
			price: parseFloat(this.priceRef.current.value), 
			status: this.statusRef.current.value,
			desc: this.descRef.current.value, 
			image: this.imageRef.current.value
		}
		this.props.addFish(fish);
	}
	render() {
		return (
			<form className="fish-edit" onSubmit={this.createFish}>
				<input name="name" type="text" ref={this.nameRef} placeholder="Name" />
				<input name="price" type="text" ref={this.priceRef} placeholder="Price" />
				<select ref={this.statusRef}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea name="desc" ref={this.descRef} placeholder="Desc" />
				<input name="image" type="text" ref={this.imageRef} placeholder="Image" />
				<button type="submit">+ Add Fish</button>
			</form>
		);
	}
}

export default AddFishForm;