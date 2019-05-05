import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
//#Adding states
//create a class that extends the App component
class App extends Component{
	//whatever you define here can be passed as a prop to render component
	constructor(){
		super()
		//create state object
		this.state = {
			//these are the two properties that describes our application
			//this connect robot to robots array
			//robot: robots,
			//link robot to an empty array
			robot: [],
			searchfield: ''
		}
	}

//for an array 
	componentDidMount = (event) => {
		fetch('./robots')
		.then(response=> response.json)
		.then(robot => this.setState({robot: robots})  )
		//or
		//.then(this.setState({robot:robots}))
	}
//for json file
	// componentDidMount = (event) => {
	// 	fetch('https//www.api/user')
	// 	.then(response=> response.json())
	// 	.then(user => this.setState({robot: ruser})  )
		//or
		//.then(this.setState({robot:robots}))
	//}
	//you need an event function that serves as a Link between the Child component:"searcbox" and the Parent component: "App"
	 onSearchChange = (event) =>{
	 	this.setState({searchfield: event.target.value})
	}

	render(){
		const searchResult = this.state.robot.filter(
			//search parameter
			robots =>{return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if (this.state.robot.length === 0) {
			return <h1>Loading</h1>
		}else {	
	 return (
		<div className="tc">
			<h1>ROBOFRIENDS</h1>
			(//create a prop that takes in the state)
			<SearchBox searchChange={this.onSearchChange} />
			<CardList robots={searchResult}/>
		</div>
		);
	  }
	}
}

export default App; 