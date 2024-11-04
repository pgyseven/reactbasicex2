import React, { useState } from 'react';
function Body() {
    const [count, setCount] = useState(0); // useState 객체 생성 / 구조분해와 같은 구조 즉 useState는 배열을 반환

    const onIncreasement = function() {
        setCount(count + 1);
    };

    const onDecrasement = function() {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className='body'>

            <button onClick={onIncreasement}>+</button>
            {count}
            <button onClick={onDecrasement}>-</button>

        </div>
    );

    
}

export default Body;
