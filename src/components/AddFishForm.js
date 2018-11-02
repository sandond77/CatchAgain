import React, { Component } from 'react';

class AddFishForm extends Component {
	render() {
		return (
			<form className="fish-edit">
				<input name="name" type="text" placeholder="Name" />
				<input name="price" type="text" placeholder="Price" />
				<select>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea name="desc" placeholder="Desc" />
				<input name="image" type="text" placeholder="Image" />
				<button type="submit">+ Add Fish</button>
			</form>
		);
	}
}

export default AddFishForm;