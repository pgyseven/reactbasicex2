import React from 'react';
function Body() {
    const num = 20;
    if (num === 0) {
        return <div style={{backgroundColor: 'yellow', color: 'gray'}}>{num} is even</div>;
  }else{
    return <div style={{backgroundColor: 'yellow', color: 'gray'}}>{num} is odd</div>;
  }
}
export default Body;

// export : 기본적으로 변수, 함수, 상수, 객체등을 내보내기 할 때 사용
// export default : 하나의 js 파일내에 하나의 컴포넌트가 있고, 단 하나만 내보낼때