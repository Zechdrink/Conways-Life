import React from 'react';
import Grid from './Grid';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.speed = 100;
        this.rows = 30;
        this.cols = 30;

        this.state = { 
            generation: 0,
            gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
         }
    }
    render() { 
        return ( 
            <div>
                <h1> Game of Life </h1>
                <Grid
                gridFull = {this.state.gridFull}
                rows = {this.rows}
                cols = {this.cols}
                selectBox = {this.selectBox}
                />
            </div>
         );
    }
}
 
export default Main;