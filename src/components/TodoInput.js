import React, {Component} from 'react';
import '../css/TodoInput.css';
import {bindActionCreators} from 'redux';
import {addItem, addItemDept1} from '../actions';
import { connect } from 'react-redux';

class TodoInput extends Component{

    constructor(props) {
        super(props);
        this.state = {
            category: '',
            value: ''
        }
    }

    addItem(text, checked, color) {

        this.props.addItem(text, checked, color);
        this.setState({
            value: ''
        });
        //this.loadItem();
    }

    addItemDept1(code, text, checked, color) {

        this.props.addItemDept1(code, text, checked, color);
        this.setState({
            value: ''
        });
        //this.loadItem();
    }

    // loadItem(){
    //     this.props.loadItem();
    // }

    render(){
        const {color} = this.props;

        return (
            <div className="form">
                {/*
                <select
                    id="category"
                    name="category"
                    onChange={(e) =>
                        this.setState({category: e.target.value})}>
                    <option value="Lee">이</option>
                    <option value="kim">김</option>
                </select>
                */}
                <input
                    value={this.state.value}
                    onChange={(e) =>
                        this.setState({value: e.target.value})}
                    onKeyDown={(e) => {
                        if (e.keyCode === 13){
                            this.addItem(this.state.value, false, color);
                        }
                    }}
                    style={{color}}
                />
                <div className="create-button"
                     onClick={ () => {
                         this.addItem(this.state.value, false, color);
                         // this.addItemDept1(this.state.category, this.state.value, false, color);
                     }}
                >
                    Add
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        text: '',
        color: state.changeTextColor.inputCol
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addItem: bindActionCreators(addItem, dispatch),
        addItemDept1: bindActionCreators(addItemDept1, dispatch),
        // loadItem: bindActionCreators(loadItem, dispatch)
    }
}

TodoInput = connect(mapStateToProps, mapDispatchToProps)(TodoInput);
export default TodoInput;