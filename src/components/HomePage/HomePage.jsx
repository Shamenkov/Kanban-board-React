import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import TaskBlock from '../TaskBlock/TaskBlock';
import TaskBlock2 from '../taskBlock2';


function HomePage({ActiveTaskCount, setActiveTaskCount, FinishedTaskCount, setFinishedTaskCount}){
    
    
  //UseState`s    
    const [isEmpty, setIsEmpty] = useState(false)
    const[addButtonDisabled, setButtonDisabled] = useState(false)
  
    const [open, setOpen] = useState(false)
  
    const [inputActive, setInputActive] = useState(false)
  
    const [AddButtonActive, setAddButtonActive] = useState(true)
  
    const [SubmitButtonActive, setSubmitButtonActive] = useState(false)
  
    const [inputValue, setInputValue] = useState('')
      
    const [BacklogItemList, setItemList] = useState(() => {
      return JSON.parse(localStorage.getItem('BacklogItemList')) || []
    })
  
    const [ReadyItemList, setReadyItemList] = useState(() => {
      return JSON.parse(localStorage.getItem('ReadyItemList')) || []
    })
  
    const [InProgresItemList, setInProgresItemList] = useState(() => {
      return JSON.parse(localStorage.getItem('InProgresItemList')) || []
    })
  
    const [FinishedItemList, setFinishedItemList] = useState(() => {
      return JSON.parse(localStorage.getItem('FinishedItemList')) || []
    })

  //useEffect`s 
//   useEffect(() =>{
//     if(BacklogItemList.length === 0){
//       setButtonDisabled(true)
//       setIsEmpty(true)
//     }else{
//       setButtonDisabled(false)
//       setIsEmpty(false)
//     }
//   }, [BacklogItemList])

//   useEffect(() =>{
//     if(ReadyItemList.length === 0){
//       setButtonDisabled(true)
//       setIsEmpty(true)
//     }else{
//       setButtonDisabled(false)
//       setIsEmpty(false)
//     }
//   }, [ReadyItemList])

//   useEffect(() =>{
//     if(InProgresItemList.length === 0){
//       setButtonDisabled(true)
//       setIsEmpty(true)
//     }else{
//       setButtonDisabled(false)
//       setIsEmpty(false)
//     }
//   }, [InProgresItemList])

//   useEffect(() =>{
//     if(FinishedItemList.length === 0){
//       setButtonDisabled(true)
//       setIsEmpty(true)
//     }else{
//       setButtonDisabled(false)
//       setIsEmpty(false)
//     }
// }, [FinishedItemList])
  
  useEffect(() =>{
      localStorage.setItem('BacklogItemList', JSON.stringify(BacklogItemList))
  },[BacklogItemList])
  
  useEffect(() =>{
      localStorage.setItem('ReadyItemList', JSON.stringify(ReadyItemList))
  },[ReadyItemList])
  
  useEffect(() =>{
      localStorage.setItem('InProgresItemList', JSON.stringify(InProgresItemList))
  },[InProgresItemList])
  
    useEffect(() =>{
      localStorage.setItem('FinishedItemList', JSON.stringify(FinishedItemList))
    },[FinishedItemList])


    
    //FUNCTION`S  
        
          //READY function
    function hendlerReadySelectClick (e) {
      let item = (BacklogItemList.find(item => item.title === e.target.outerText))
      let itemIndex = Number(BacklogItemList.indexOf(item))
      let NewArr = BacklogItemList.splice(itemIndex, 1)
      let newItem = NewArr[0]
      setReadyItemList([...ReadyItemList, newItem])
      setItemList(BacklogItemList)
      localStorage.setItem('BacklogItemList', JSON.stringify(BacklogItemList))
      setOpen(false)
      setAddButtonActive(true)
      setActiveTaskCount(Number(ActiveTaskCount - 1))
      localStorage.setItem('ActiveTaskCount', ActiveTaskCount)
    }
  
        //INPROGRES function
    function hendlerInProgresSelectClick (e) {
      let item = (ReadyItemList.find(item => item.title === e.target.outerText))
      let itemIndex = Number(ReadyItemList.indexOf(item))
      let NewArr = ReadyItemList.splice(itemIndex, 1)
      let newItem = NewArr[0]
      setInProgresItemList([...InProgresItemList, newItem])
      setReadyItemList(ReadyItemList)
      localStorage.setItem('ReadyItemList', JSON.stringify(ReadyItemList))
      setOpen(false)
      setAddButtonActive(true)
    }
  
        //Finished function
    function hendlerFinishedSelectClick (e) {
      let item = (InProgresItemList.find(item => item.title === e.target.outerText))
      let itemIndex = Number(InProgresItemList.indexOf(item))
      let NewArr = InProgresItemList.splice(itemIndex, 1)
      let newItem = NewArr[0]
      setFinishedItemList([...FinishedItemList, newItem])
      setInProgresItemList(InProgresItemList)
      setOpen(false)
      localStorage.setItem('InProgresItemList', JSON.stringify(InProgresItemList))
      setAddButtonActive(true)
      setFinishedTaskCount(Number(FinishedTaskCount + 1))
      localStorage.setItem('FinishedTaskCount', FinishedTaskCount)
    }
  
    function hendlerBacklogClick (){
      setInputActive(true);
      setAddButtonActive(false);
      setSubmitButtonActive(true)
  }
  
  function hendlerReadyClick (e){
    if(BacklogItemList.length === 0){
      console.log('disabled')
    }else{
      setOpen(true)
      setAddButtonActive(false)
    }
    
  }
  
  function hendlerInProgresClick (e){
    console.log(e)
    if(ReadyItemList.length === 0){
      console.log('disabled')
    }else{
      setOpen(true)
      setAddButtonActive(false)
      setIsEmpty(false)
    }
    
  }
  
  function hendlerFinishedClick (e){
    if(InProgresItemList.length === 0){
      console.log('disabled')
      // setIsEmpty(true)
    }else{
      e.target.disabled = false
      setOpen(true)
      setAddButtonActive(false)
      setIsEmpty(false)
    }
    
  }
  
    function onClickSaveValue () {
      if(inputValue !== ''){
        setItemList([ ...BacklogItemList, {
          title: inputValue,
          id: Date.now(),
          itemState: 'BackLog',
          description: 'This task has no description'
         }])
         setActiveTaskCount(Number(ActiveTaskCount + 1))
         localStorage.setItem('ActiveTaskCount', ActiveTaskCount)
         setButtonDisabled(false)
      }else{}
      setInputValue('')
      setAddButtonActive(true)
      setInputActive(false)
      setSubmitButtonActive(false)
    }
  

    //RETURN
  
    return (
        
        <div className='main'>
          <TaskBlock2
          title={'Backlog'} 
          itemList={BacklogItemList}        
          hendlerChange={e => {setInputValue (e.target.value)}} 
          hendlerSaveValueClick={onClickSaveValue} 
          value={inputValue} 
          inputActive={inputActive} 
          AddButtonActive={AddButtonActive} 
          SubmitButtonActive={SubmitButtonActive}
          setInputActive={setInputActive}
          setAddButtonActive={setAddButtonActive}
          setSubmitButtonActive={setSubmitButtonActive}
          hendlerClick={hendlerBacklogClick}         
          />
  
          <TaskBlock2 
          title={'Ready'}
          selectClick={hendlerReadySelectClick}
          open={open}
          hendlerClick={hendlerReadyClick}
          setOpen={setOpen}
          AddButtonActive={AddButtonActive}
          itemList={ReadyItemList}
          selectList={BacklogItemList}
          buttonDisabled={addButtonDisabled}
          isEmpty={isEmpty}
          />
  
          <TaskBlock2 
          title={'In Progres'} 
          itemList={InProgresItemList}
          selectClick={hendlerInProgresSelectClick}
          open={open}
          hendlerClick={hendlerInProgresClick}
          setOpen={setOpen}
          AddButtonActive={AddButtonActive}
          selectList={ReadyItemList}
          buttonDisabled={addButtonDisabled}
          isEmpty={isEmpty}
          />
  
          <TaskBlock2 
          title={'Finished'}
          itemList={FinishedItemList}
          selectClick={hendlerFinishedSelectClick}
          open={open}
          hendlerClick={hendlerFinishedClick}
          setOpen={setOpen}
          AddButtonActive={AddButtonActive}
          selectList={InProgresItemList}
          buttonDisabled={addButtonDisabled}
          isEmpty={isEmpty}
           />
  
        </div>
        
    );
  }
  
  export default HomePage;