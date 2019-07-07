import React, {Component} from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends Component{

    render() {
        return (
            <div>
                <div>
                    <h1>VALUE: { this.props.value } {this.props.text}</h1>
                </div>
                <div>
                    <button type="button"
                            onClick={ this.props.onIncrement }>
                        +
                    </button>
                    <button type="button"
                            onClick={ this.props.onDecrement }>
                        -
                    </button>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state){
    return {
        value: state.counterReducer.number,
    };
}

function mapDispatchToProps(dispatch){
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement())
    }
}

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;