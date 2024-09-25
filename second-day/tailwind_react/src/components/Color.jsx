import React, { useState } from "react";

function Color({handelCardColor}){
    const [color, setColor] = useState('#d4d4d4');
    handelCardColor(color);
    return(
        <>
                <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                    <div className="flex flex-wrap justify-center gap-3">
                        <button type="button" className="p-4" style ={{backgroundColor: "red"}} onClick={()=> setColor('red')}>Red</button>
                        <button type="button" className="p-4" style ={{backgroundColor: "yellow"}} onClick={()=> setColor('yellow')}>Yellow</button>
                        <button type="button" className="p-4" style ={{backgroundColor: "orange"}} onClick={()=> setColor('orange')}>Orange</button>
                        <button type="button" className="p-4" style ={{backgroundColor: "blue"}} onClick={()=> setColor('blue')}>Blue</button>
                        <button type="button" className="p-4" style ={{backgroundColor: "black"}} onClick={()=> setColor('black')}>Black</button>
                    </div>
                </div>
        </>
    )
}

export default Color