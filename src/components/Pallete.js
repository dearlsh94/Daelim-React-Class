import React, { Component } from 'react';
import '../css/Pallete.css';
import {bindActionCreators} from "redux";
import {changeTextColor} from "../actions";
import { connect } from 'react-redux';

class Pallete extends Component{


    changeColor(color) {
        this.props.changeTextColor(color)
    }

    render(){
      const { colors } = this.props;

    const colorList = colors.map(
          (colors) => (
              <button
                  className="btnColor"
                  key={colors.id}
                  text={colors.color}
                  style={{background:colors.color}}
                  onClick={(e) =>{
                      e.stopPropagation();
                      this.changeColor(colors.color)
                  }}
              >{colors.color}
              </button>
          )
    );

      return (
	<div className="palette">
	 {colorList}
	</div>
    );
  }
}

function mapStateToProps(state) {
    return {
        colors: state.changeTextColor.list
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeTextColor: bindActionCreators(changeTextColor, dispatch)
    }
}

Pallete = connect(mapStateToProps, mapDispatchToProps)(Pallete);
export default Pallete;
