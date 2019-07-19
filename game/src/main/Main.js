import React from 'react';
import Grid from './Grid';
import './main.scss'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.rows = 30;
        this.cols = 30;

        this.state = { 
            generation: 0,
            gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
            gridLines: false,
            speed: ""
         }
    }
         selectBox = (row, col) => {
             let gridCopy = arrayClone(this.state.gridFull);
             gridCopy[row][col] = !gridCopy[row][col];
             this.setState({
                 gridFull: gridCopy
             })
             console.log(gridCopy)
         }

        //This seed function randomly populates the grid upon load
         seed = () => {
            let gridCopy = arrayClone(this.state.gridFull);
            for (let i = 0; i < this.rows; i++){
                for (let j = 0; j < this.cols; j++){
                    if(Math.floor(Math.random() * 4) === 1){
                        gridCopy[i][j] = true;
                    }
                }
            }
            this.setState({
                 gridFull: gridCopy
             })
         }

         playSequence = () => {
             clearInterval(this.intervalId);
             this.intervalId = setInterval(this.play, this.state.speed);
         }

         pauseSequence = () => {
             clearInterval(this.intervalId);
         }

         clearSequence = () => {
             this.setState({
                 gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
             })
         }

         reset = () => {
              this.setState({
                 gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
            },()=> {
                 this.seed()
            })
         }

         gridLineToggle = () => {
             if (this.state.gridLines){
                 this.setState({
                     gridLines: false
                 })
             } else if (!this.state.gridLines){
                 this.setState({
                     gridLines: true
                 })
             }
         }

         play = () => {
             let g = this.state.gridFull;
             let g2 = arrayClone(this.state.gridFull);


            //Nested forloop to iterate through every element of the grid
            //And Carry out the sequence based off of the game rules.
             for (let i = 0; i < this.rows; i++){
                 for (let j = 0; j < this.cols; j++){
                    let count = 0;
                    if (i > 0 && g[i-1][j]) count++;
                    if (i > 0 && j > 0 && g[i-1][j-1]) count++;
                    if (i > 0 && j < this.cols - 1 && g[i-1][j+1]) count++;
                    if (j < this.cols -1 && g[i][j+1]) count++;
                    if (j > 0 && g[i][j-1]) count++;
                    if (i < this.rows - 1 && g[i+1][j]) count++;
                    if (i < this.rows - 1 && j > 0 && g[i+1][j-1]) count++;
                    if (i < this.rows -1 && this.cols - 1 && g[i+1][j+1]) count++;

                    if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
                    if (!g[i][j] && count === 3) g2[i][j] = true;

                 }
             }
             this.setState({
                 gridFull: g2,
                 generation: this.state.generation + 1
             })
         }

           handleChanges = event => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

         componentDidMount(){
             this.seed();
         }

    render() { 
        return ( 
            <div>
                <Grid
                gridFull = {this.state.gridFull}
                rows = {this.rows}
                cols = {this.cols}
                selectBox = {this.selectBox}
                gridLines = {this.state.gridLines}
                />
                <div className = "button-wrapper">
                    <div>
                        <button onClick = {this.playSequence}>Play</button>
                        <button onClick = {this.pauseSequence}> Pause </button>
                        <button onClick = {this.clearSequence}> Clear </button>
                        <button onClick = {this.reset}>Reset</button>
                        <button onClick = {this.gridLineToggle}> Toggle Grid Lines </button>
                    </div>
                    <form>
                        <input autocomplete = "off" type = "text" onChange = {this.handleChanges} placeholder = "Enter Preferred Run Speed" value = {this.state.speed} name = "speed"/>
                    </form>
                </div>
            </div>
         );
    }
}
    function arrayClone(arr)
    {
        return JSON.parse(JSON.stringify(arr));
    }
 
export default Main;