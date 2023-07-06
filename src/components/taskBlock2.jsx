import Button from "./button/button";
import Input from "./input/input";
import TodoItems from "./TodoItems/TodoItems";


const AddElementImg = <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 6H8V1C8 0.448 7.552 0 7 0C6.448 0 6 0.448 6 1V6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8H6V13C6 13.552 6.448 14 7 14C7.552 14 8 13.552 8 13V8H13C13.552 8 14 7.552 14 7C14 6.448 13.552 6 13 6Z" fill="#5E6C84"/>
</svg>
const arrowDown = <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.5L11 13L19 0.5" stroke="black"/>
</svg>


function TaskBlock2 ({title, itemList, children, AddButtonActive, hendlerClick, open, inputActive, hendlerChange, value, SubmitButtonActive, hendlerSaveValueClick, selectList, selectClick, buttonDisabled, isEmpty, }) {
    return(
        <div className="taskBlock">
            <h2 className="taskBlock_title">{title}</h2>
            <TodoItems itemList={itemList} />
            <Input customClass={inputActive ? 'taskInput active' : 'taskInput'} hendlerChange={hendlerChange} value={value}/>
            <Button title={'Add card'} customClass={AddButtonActive ? 'AddTaskButton active' : 'AddTaskButton'} img={AddElementImg} onClick={hendlerClick} buttonDisabled={buttonDisabled}>{isEmpty && <span>(List is ampty)</span>}</Button>
            <Button title={'Submit'} customClass={SubmitButtonActive ? 'SubmitTaskButton active' : 'SubmitTaskButton'} onClick={hendlerSaveValueClick}/>
            {open && <div className="taskSelect">{arrowDown}</div>}
            {open && <TodoItems itemList={selectList} customClass={'selectItems'} selectClick={selectClick}/>}
            
        </div>
    )
} 



export default TaskBlock2;