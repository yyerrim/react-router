import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
    <BrowserRouter>
      <div>
        <h1>React Router DOM</h1>
        <a href='/1'>1번으로 이동</a> /&nbsp;
        <a href='/2'>2번으로 이동</a> /&nbsp;
        <a href='/3'>3번으로 이동</a>
        <Routes>
          <Route path='/1' element={<Component1 />} />
          <Route path='/2' element={<Component2 />} />
          <Route path='/3' element={<Component3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
