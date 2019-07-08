import React, {Component} from 'react';
import { connect } from 'react-redux';
import {increment, decrement} from '../actions';
import {bindActionCreators} from "redux";

class Counter extends Component{

    render() {
        return (
            <div>
                <div>
                    <h1>VALUE: { this.props.value }</h1>
                </div>
                <div>
                    <button type="button"
                            onClick={(e) =>
                                this.props.increment(this.props.value)}>
                        +
                    </button>
                    <button type="button"
                            onClick={(e) =>
                                this.props.decrement(this.props.value)}>
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
        increment: bindActionCreators(increment, dispatch),
        decrement: bindActionCreators(decrement, dispatch),
    }
}

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;