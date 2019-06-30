import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import TodoItem from './FormTodoItem';
import { addItem, removeItem, toggleItem, loadSection } from '../actions';
import _ from 'lodash';

class ItemList extends Component{

    componentDidMount(){
        this.loadSection();
    }

    constructor(props) {
        super(props);
        this.state = {
            sections : ''
        }
    }

    loadSection(){
        this.props.loadSection();
    }

    toggleItem(key, checked){
        this.props.toggleItem(key, checked);
        this.loadSection();
    }

    removeItem(key){
        this.props.removeItem(key);
        this.loadSection();
    }

    render(){
        const { sections } = this.props;
        const todoList = _.map(
            sections, (item) =>
                <TodoItem
                    key = {item.key}
                    text = {item.text}
                    color={item.color}
                    checked={item.checked}
                    onToggle={(e) => {
                        e.stopPropagation();
                        this.toggleItem(item.key, item.checked);
                    }}
                    onDel={(e) => {
                        e.stopPropagation();
                        this.removeItem(item.key);
                    }}
                />
        );

        return (
            <div>
                <span>
                <div>
                    <div className="create-button"
                         onClick = {(e) =>{
                             e.stopPropagation();
                             this.loadSection();
                         }}>
                        Load TodoList
                    </div>
                    <div>
                        {todoList}
                    </div>
                </div>
                </span>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        sections: state.daoReducer.sections
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //bindActionCreators : dispatch method 까지 연결해주는 redux 라이브러리 함수
        addItem: bindActionCreators(addItem, dispatch),
        removeItem: bindActionCreators(removeItem, dispatch),
        toggleItem: bindActionCreators(toggleItem, dispatch),
        loadSection: bindActionCreators(loadSection, dispatch),
    }
}

//send state & dispatch method : Container component to Presentation component
ItemList = connect(mapStateToProps, mapDispatchToProps)(ItemList);
export default ItemList;