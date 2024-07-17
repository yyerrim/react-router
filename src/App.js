import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
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

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <h1>React Router DOM</h1>
//         <a href='/1'>1번으로 이동</a> /&nbsp;
//         <a href='/2'>2번으로 이동</a> /&nbsp;
//         <a href='/3'>3번으로 이동</a>
//         {/* react는 전체 페이지 새로고침을 좋아하지 않음 */}
//         {/* single page application : 보이는 화면에서 컴포넌트만 교체 */}
//         <hr />
//         <Link to='/1'>1번으로 이동</Link> /&nbsp;
//         <Link to='/2'>2번으로 이동</Link> /&nbsp;
//         <Link to='/3'>3번으로 이동</Link>
//         <hr />
//         <NavLink to='/1'>1번으로 이동</NavLink> /&nbsp;
//         <NavLink to='/2'>2번으로 이동</NavLink> /&nbsp;
//         <NavLink to='/3'>3번으로 이동</NavLink>
//         <Routes>
//           <Route path='/1' element={<Component1 />} />
//           <Route path='/2' element={<Component2 />} />
//           <Route path='/3' element={<Component3 />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// PDF 12.10 / 12.11
function ComponentN() {
  console.dir(useParams());
  const { number } = useParams();
  return <div>(1~3제외) {number}번 화면</div>
}

function ComponentAZ() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const name = searchParams.get('name');
  return <div>ID-{id}, NAME-{name}</div>
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router DOM</h1>
        <Link to='/1'>1번으로 이동</Link> /&nbsp;
        <Link to='/2'>2번으로 이동</Link> /&nbsp;
        <Link to='/3'>3번으로 이동</Link> /&nbsp;
        <Link to='/4'>4번으로 이동</Link> /&nbsp;
        <Link to='/5'>5번으로 이동</Link>
        <Routes>
          <Route path='/1' element={<Component1 />} />
          <Route path='/2' element={<Component2 />} />
          <Route path='/3' element={<Component3 />} />
          <Route path='/:number' element={<ComponentN />} />
          <Route path='/a' element={<ComponentAZ />} />
          {/* http://localhost:3000/a?id=aaa&name=bbb : ID-aaa, NAME-bbb 출력 */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
