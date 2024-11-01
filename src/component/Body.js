import React from 'react';
function Body({name, age, addr, hobbies}) {
    
    return (
        <>
        <div style={{backgroundColor:'green'}}>
            이름 : {name}
        </div>
        <div style={{backgroundColor:'gold'}}>
            나이 : {age}
        </div>
        <div style={{backgroundColor:'orange'}}>
            주소 : {addr}
        </div>

        <div>
            {name}학생의 취미는 {hobbies.length}가지 입니다.
        </div>
    </>
    );

    
}
//부모 컴포넌트에서 넘겨온 props 중에서 값이 제대로 전달되지 않는 속성이 있다면 에러가 나는데,
// 값이 전달되지 않더라도 기본값을 줄 수 있다.
Body.defaultProps = {
    hobbies : []
};
export default Body;

// export : 기본적으로 변수, 함수, 상수, 객체등을 내보내기 할 때 사용
// export default : 하나의 js 파일내에 하나의 컴포넌트가 있고, 단 하나만 내보낼때