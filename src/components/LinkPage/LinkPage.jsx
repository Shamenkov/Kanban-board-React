import React, { useEffect } from "react";
import { useState } from 'react';
import Button from "../button/button";
import { Link } from "react-router-dom";

const exitButton = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M6.00015 4.58569L12.0002 10.5857L18.0002 4.58569L19.4144 5.99991L13.4144 11.9999L19.4144 17.9999L18.0002 19.4141L12.0002 13.4141L6.00015 19.4141L4.58594 17.9999L10.5859 11.9999L4.58594 5.99991L6.00015 4.58569Z" fill="black"/>
    </svg>


function LinkPage () {
    useEffect(() =>{
        
        if(BacklogItemList.find(item => item.id === Number(window.location.pathname.slice(6)))){
            let subject = BacklogItemList.find(item => item.id === Number(window.location.pathname.slice(6)))
            setMainObject(...mainObject, subject)            
        }else if(ReadyItemList.find(item => item.id === Number(window.location.pathname.slice(6)))){
            let subject = ReadyItemList.find(item => item.id === Number(window.location.pathname.slice(6)))
            setMainObject(...mainObject, subject)
        }else if(InProgresItemList.find(item => item.id === Number(window.location.pathname.slice(6)))){
            let subject = InProgresItemList.find(item => item.id === Number(window.location.pathname.slice(6)))
            setMainObject(...mainObject, subject)
        }else if(FinishedItemList.find(item => item.id === Number(window.location.pathname.slice(6)))){
            let subject = FinishedItemList.find(item => item.id === Number(window.location.pathname.slice(6)))
            setMainObject(...mainObject, subject)
        }
     }, [])

    const [BacklogItemList, setItemList] = useState(JSON.parse(localStorage.getItem('BacklogItemList')))
  
    const [ReadyItemList, setReadyItemList] = useState(JSON.parse(localStorage.getItem('ReadyItemList')))
  
    const [InProgresItemList, setInProgresItemList] = useState(JSON.parse(localStorage.getItem('InProgresItemList')))
  
    const [FinishedItemList, setFinishedItemList] = useState(JSON.parse(localStorage.getItem('FinishedItemList')))

    const [mainObject, setMainObject] = useState([])

    const [inputValue, setInputValue] = useState('')
    
    const [active, setActive] = useState(true)
    

    // function hendlerReadySelectClick (e) {
    //     let item = (BacklogItemList.find(item => item.title === e.target.outerText))
    //     let itemIndex = Number(BacklogItemList.indexOf(item))
    //     let NewArr = BacklogItemList.splice(itemIndex, 1)
    //     let newItem = NewArr[0]
    //     setReadyItemList([...ReadyItemList, newItem])
    //     setItemList(BacklogItemList)
    //     setOpen(false)
    //     setAddButtonActive(true)
    //   }
    
    return(
        <div className="linkContainer">
           <div className="LinkUpperCase">
                <h1>{mainObject.title}</h1>
                <Button customClass={'exitButton'}><Link to='/'>{exitButton}</Link></Button>
            </div>
           <div className="linkDescription">
                {active && <span className="description_text">{mainObject.description}</span>}
               <textarea className="TextArea" onClick={() => setActive(false)} onChange={e => setInputValue(e.target.value)}></textarea>
            </div>
        </div>
        )
} 

export default LinkPage;