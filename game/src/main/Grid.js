import React from "react";
import Box from "./Box.js";

class Grid extends React.Component {
    render() { 
        const width = this.props.cols * 16;
        let rowsArray = [];
        let boxClass = "";
        let boxClassNoLines = "";

        for (let i = 0; i < this.props.rows; i++)
        {
            for (let j = 0; j < this.props.cols; j++)
            {
                let boxId = i + "_" + j;

                boxClass = this.props.gridFull[i][j] ? "box on": "box off";
                boxClassNoLines = this.props.gridFull[i][j] ? "no-lines-box lineson": "no-lines-box linesoff";
                rowsArray.push(
                    <Box
                    boxClass = {boxClass}
                    boxClassNoLines = {boxClassNoLines}
                    key = {boxId}
                    boxId = {boxId}
                    row = {i}
                    col = {j}
                    selectBox = {this.props.selectBox}
                    gridLines = {this.props.gridLines}
                    />
                );
            }
        }
        

        return ( 
        <div className = "grid-wrapper" style = {{ width: width }}>
            {rowsArray}
        </div> );
    }
}
 
export default Grid;