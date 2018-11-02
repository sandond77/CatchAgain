import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends Component {
	state = {
		fishes: {},
		order: {}
	}

	addFish = (fish) => {
		//Take a copy of the existing state
		const fishes = {...this.state.fishes};
		//Adding our new fish to that fishes variable
		fishes[`fish${Date.now()}`] = fish;
		//Setting the that fishes object as new state
		this.setState({
			fishes
		})
	};

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">	
					<Header tagline="Fresh Seafood Market" age={100}/>
				</div>
				<Order />
				<Inventory addFish={this.addFish} />
			</div>
		);
	}
}

export default App;