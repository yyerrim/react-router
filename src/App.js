import './App.css';

function Component1() {
  return <div>1번 화면</div>
}
function Component2() {
  return <div>2번 화면</div>
}
function Component3() {
  return <div>3번 화면</div>
}

function App() {
  return (
    <div>
      <h1>React Router DOM</h1>
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}

export default App;
