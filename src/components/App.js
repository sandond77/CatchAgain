import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends Component {
	state = {
		fishes: {},
		order: {}
	}

	static propTypes = {
		match: PropTypes.object
	}

	componentDidMount(){
		const localStorageRef = localStorage.getItem(this.props.match.params.storeId);
		if(localStorageRef){
			this.setState({ order: JSON.parse(localStorageRef)})
		}
		const { params } = this.props.match;
		this.ref = base.syncState(`${params.storeId}/fishes`, {
			context: this,
			state: 'fishes'

		});
	}

	componentWillUnmount(){
		base.removeBinding(this.ref);
	}

	componentDidUpdate(){
		localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
	}

	addFish = (fish) => {
		//Take a copy of the existing state
		const fishes = {...this.state.fishes};
		//Adding our new fish to that fishes variable
		fishes[`fish${Date.now()}`] = fish;
		//Setting the that fishes object as new state
		this.setState({fishes});
	};

	updateFish = (key, updatedFish) => {
		const fishes = {...this.state.fishes}
		fishes[key] = updatedFish;
		this.setState({fishes})
	}

	deleteFish = (key) => {
		const fishes = {...this.state.fishes};
		fishes[key] = null;
		this.setState({fishes})
	}

	loadSampleFishes = () =>{
		this.setState({fishes: sampleFishes });
	}

	addToOrder = (key) => {
		const order = {...this.state.order};
		order[key]= order[key] + 1 || 1;
		this.setState({order});
	}

	deleteFromOrder = (key) => {
		const order = {...this.state.order};
		delete order[key];
		this.setState({order});
		console.log('deleted')
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">	
					<Header tagline="Fresh Seafood Market"/>
					<ul className="fishes" >
						{Object.keys(this.state.fishes).map(key => 
							<Fish 
								key={key} 
								index={key}
								details={this.state.fishes[key]}
								addToOrder={this.addToOrder}
							/>
						)}
					</ul>
				</div>
				<Order 
					fishes = {this.state.fishes}
					order = {this.state.order}
					deleteFromOrder = {this.deleteFromOrder}
				/>
				<Inventory
				addFish={this.addFish} 
				updateFish={this.updateFish}
				deleteFish={this.deleteFish}
				loadSampleFishes={this.loadSampleFishes}
				fishes={this.state.fishes}
				storeId={this.props.match.params.storeId}
				/>
			</div>
		);
	}
}

export default App; 