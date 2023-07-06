import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import HomePage from './components/HomePage/HomePage';
import LinkPage from './components/LinkPage/LinkPage';
import TaskBlock from './components/TaskBlock/TaskBlock';

function App() {
  const [ActiveTaskCount, setActiveTaskCount] = useState(() => {
    return localStorage.getItem('ActiveTaskCount') || 0
  })
  const [FinishedTaskCount, setFinishedTaskCount] = useState(() => {
    return localStorage.getItem('FinishedTaskCount') || 0
  })

  useEffect(() =>{
    localStorage.setItem('ActiveTaskCount', ActiveTaskCount)
  }, [ActiveTaskCount])

  useEffect(() =>{
    localStorage.setItem('FinishedTaskCount', FinishedTaskCount)
  }, [FinishedTaskCount])

  return(
    <div className="App">
      <Header />
        <div className='continer_main'>
          <Router>
            <Routes>
              <Route path='/' element={<HomePage ActiveTaskCount={ActiveTaskCount} setActiveTaskCount={setActiveTaskCount} FinishedTaskCount={FinishedTaskCount} setFinishedTaskCount={setFinishedTaskCount}/>} />
              <Route path='/link/:id' element={<LinkPage />} />
            </Routes>            
          </Router>
        </div>
      <div className='footer'>
        <div className='footerTaskInfo'>
          <span className='activeTaskInfo'>Active tasks: {ActiveTaskCount}</span>
          <span className='finishedTasksInfo'>Finished tasks: {FinishedTaskCount}</span>
        </div>
        <div className='footerInfo'>Kanban board by Nickita Shamenkov 2023</div>
      </div>
    </div>
  )
}

export default App;