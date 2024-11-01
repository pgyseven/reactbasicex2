import "./App.css"
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import Footer from "./component/Footer.js";

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

      <Footer />
    </div>
  );
}

export default App;
