import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../actions';

class Counter extends Component {

	render() {

		return (
			<div>
				<h1>Your score is: {this.props.ctr} </h1>

				<div>
					<button onClick={this.props.onIncCounter}>Lisää 1</button>
					<button onClick={this.props.onDecCounter}>Poista 1</button>
					<button onClick={this.props.onAddCounter}>Lisää 5</button>
					<button onClick={this.props.onSubCounter}>Poista 5</button>
					<button onClick={() => this.props.onStoreCounter(this.props.ctr)}>Tallenna tulos</button>

					<ul>
						{this.props.storedResults.map(item => (
							<li key={item.id} onClick={() => this.props.onDeleteCounter(item.id)}>
								{item.value}
							</li>
						))}
					</ul>

					{/* <button onClick={() => this.counterChangedHandler('sub', 5)}>Remove five</button> */}
				</div>
			</div>
		)
	}

}

const mapStateToProps = state => {
	return {
		ctr: state.ctr.counter,
		storedResults: state.res.results
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onIncCounter: () => dispatch({ type: actionTypes.INCREMENT }),
		onDecCounter: () => dispatch({ type: actionTypes.DECREMENT }),
		onSubCounter: () => dispatch({ type: actionTypes.SUBSTRACT, value: 5 }),
		onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
		onStoreCounter: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result}),
		onDeleteCounter: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElementId: id })

	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);