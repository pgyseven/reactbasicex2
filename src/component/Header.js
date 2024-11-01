// Component를 함수 선언식으로 표현할 수도 있고, 
// function Header { // 컴포넌트는 일반 메서드랑 구분 위해서 대문자 쓴다.
//   return(
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// }

// Component를 함수 표현식으로 표현할 수도 있다.
const Header = function() {
    return(
      <header>
        <h1>header</h1>
      </header>
  );

}
export default Header;