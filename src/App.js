import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import DayList from './components/DayList';
import Day from './components/Day';

function App() {
  return (
   <>
    <BrowserRouter >
      <div className='App'>
          <Header /> {/*  => 라우터의 영향을 받지 않고 고정된 컴포넌트 */}
          <Routes>
             {/* path-"/" 는 첫 페이지를 의미한다. (홈) */}
              <Route path="/" element={<DayList /> }/> 
              {/* 동적 라우팅 */}
              <Route path="/day/:day" element={<Day /> }/> 
          </Routes> 
      </div>
    </BrowserRouter>
   </>
  );
}

export default App;
