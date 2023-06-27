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

  return(
    <div className="App">
      <Header />
        <div className='continer_main'>
          <Router>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/link/:id' element={<LinkPage />} />
            </Routes>            
          </Router>
        </div>
      <div className='footer'>
        <div className='footerTaskInfo'>
          <span className='activeTaskInfo'>Active tasks: {localStorage.getItem('ActiveTaskCount')}</span>
          <span className='finishedTasksInfo'>Finished tasks: {localStorage.getItem('FinishedTaskCount')}</span>
        </div>
        <div className='footerInfo'>Kanban board by Nickita Shamenkov 2023</div>
      </div>
    </div>
  )
}

export default App;