import React from 'react';

class Box extends React.Component {

    selectBox = () => {
        this.props.selectBox(this.props.row, this.props.col);
    }

    render() { 
        return ( 
        <div 
        className = {this.props.gridLines ? this.props.boxClass : this.props.boxClassNoLines}
        id ={this.props.id}
        onClick = {this.selectBox}
      />
         );
    }
}
 
export default Box;