import React, { useState, useRef } from 'react';




const Canvas = (props) => {

    const [ width, setWidth ] = useState(600);
    const [ height, setHeight ] = useState(600);
    const canvasRef = useRef(null);
    console.log(width)

    return ( 
        <div>
            <p> I am Canvas. </p>
             <canvas ref = {canvasRef} width={width} height={height} />
        </div>
     );
}
 
export default Canvas;