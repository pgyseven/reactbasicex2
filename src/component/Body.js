import React from 'react';
function Body() {
    
    function handleOnClick(e) {
        console.log(e.target);
        if (e.target.name === 'A') {  
            alert('Button A clicked!');
        }else if (e.target.name === 'B') {
            alert('Button B clicked!');
        } 
    }
    return (
        <div className='body'>
            <button name="A" onClick={handleOnClick}>클릭A</button>
            <button name="B" onClick={handleOnClick}>클릭B</button>

        </div>
    );

    
}

export default Body;
