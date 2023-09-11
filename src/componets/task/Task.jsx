import React from 'react'

import ButtonTask from '../ui/buttonTask/ButtonTask'
import { faEraser, faPen  } from '@fortawesome/free-solid-svg-icons'

import './../task/task.css'
import { useState } from 'react'

export default function Task({task, onClickButtonDelete, onUpdateTask} ) {
    const [title, setTitle]  = useState(task.title)
    const [description, setDescription]  = useState(task.description)
    const [checkbox, setCheckbox] = useState(false)

    const onChangeTitle = (event) => {
        onUpdateTask(task.id, {title: event.target.value})
        setTitle(event.target.value)
    }

    const onChangeDescription = (event) => {
        onUpdateTask(task.id, {description: event.target.value})
        setDescription(event.target.value)
    }

    const onClickCheckbox = (event) => {
        let eventChecked = event.currentTarget.checked;  
        onUpdateTask(task.id, {done: eventChecked})
        setCheckbox(eventChecked)   
    }

    return (
        <>
            <div className='wrapper'>
                <input type="checkbox" className='checkbox' value={checkbox}  onClick={(event) => onClickCheckbox(event)}/>
                <div className="item">
                    <input 
                        value={title} 
                        onChange={(event) => onChangeTitle(event)} 
                        type="text" 
                        placeholder='Название' 
                        className={`item-input ${checkbox ? 'hidden-title' : ''}`}
                        readOnly={checkbox == true}
                    />
                    <textarea 
                        value={description}  
                        onChange={(event) => onChangeDescription(event)} 
                        className={`item-textarea ${checkbox ? 'hidden-description' : ''} `}
                        name="text" 
                        wrap='auto' 
                        rows='2' 
                        placeholder='Описание'
                        readOnly={checkbox == true}
                        >
                    </textarea>
                    <p className='item-text'>{task.data}</p>
                </div>
                <div className="btn">
                    <ButtonTask onClickHandler={onClickButtonDelete} icon={faEraser} taskId={task.id} />
                </div>
            </div>
        </>
    );
}