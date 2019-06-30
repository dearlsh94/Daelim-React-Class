import React, {Component} from 'react';
import '../css/TodoItem.css';

export default class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState){
    return this.props.checked !== nextProps.checked;
  }

  render(){
    const {text, checked, onToggle, onDel, color } = this.props;

    return(
	<div className="todo-item" onClick={onToggle}>
	  <div className="remove" onClick={onDel}>
          &times;
      </div>
        <div
            className={`todo-text ${(checked) ? 'checked' : ''}`}
            style={{color:color}}>
          <div> - {text}</div>
        </div>
        {
          checked && (<div className="check-mark">?</div>)
        }
      </div>
    );
  }
}