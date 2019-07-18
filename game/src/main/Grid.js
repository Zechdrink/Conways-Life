import React from "react";
import Box from './Box';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let width = this.props.cols;
        let rowsArray = [];

        let boxClass = "";
        for (let i = 0; i < this.props.rows; i++)
        {
            for (let j = 0; i < this.props.cols; j++)
            {
                let boxId = i + "_" + j;

                boxClass = this.props.gridFull[i][j] ? "box on": "box off";
                rowsArray.push(
                    <Box
                    boxClass = {boxClass}
                    key = {boxId}
                    boxId = {boxId}
                    row = {i}
                    col = {j}
                    selectBox = {this.props.selectBox}
                    />
                );
            }
        }
        

        return ( 
        <div className = "grid-wrapper" style = {{width: width}}> 
            {rowsArray}
        </div> );
    }
}
 
export default Grid;