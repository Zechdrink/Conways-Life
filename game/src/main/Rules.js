import React from 'react';

class Rules extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className = "rules-wrapper">
                <h1> The Rules of Life!</h1>
                <ul>
                    <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
                    <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
                    <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
                    <li>Any dead cell with three live neighbours becomes a live cell, as if by reproduction.</li>
                    <p>Credit for this information goes to WIKIPEDIA</p>
                </ul>
            </div>
         );
    }
}
 
export default Rules;