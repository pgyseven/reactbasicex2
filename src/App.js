import "./App.css"
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import Footer from "./component/Footer.js";

function ChidComp() {
  return (
    <div>Child Component</div>
  );
}

function App() {
  const stuInfo = {
    name: "John Park",
    age: 25,
    addr: "서울시",
    //hobbies: ['낮잠', '코딩', '운동', '영화보기']
  }

  return (
    <div className="App">
      <Header />
      {/* <Body name={stuInfo.Name} age={stuInfo.Age} addr={stuInfo.addr} /> */}
      <Body {...stuInfo} />
      <Footer>
        <ChidComp /> {/* 컴포넌트를 props로 전달 하기 */}
      </Footer>
    </div>
  );
}

export default App;
