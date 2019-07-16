import React, { useState, useRef, useEffect } from 'react';


   


const Canvas = (props) => {

    const [ width, setWidth ] = useState(800);
    const [ height, setHeight ] = useState(800);
    const canvasRef = useRef(null);

    let canvas;
    let context;

    const drawGrid = (width, height) => {
        let cellWidth = width * .01;
        let cellHeight = height * .01;
      
        for (let x =0; x <= width; x += cellWidth)
        {
            context.moveTo(0 + x, 0);
            context.lineTo(x, height);
        }

         for (let x =0; x <= height; x += cellHeight)
        {
            context.moveTo(0, x);
            context.lineTo(width, x);
        }
        context.strokeStyle = "black";
        context.stroke();
    }

    useEffect(() => {
        canvas = canvasRef.current;
        context = canvas.getContext("2d")
        drawGrid(width, height);  
    })

    


    return ( 
        <div>
            <p> I am Canvas. </p>
             <canvas ref = {canvasRef} width={width} height={height} />
        </div>
     );

}
 
export default Canvas;