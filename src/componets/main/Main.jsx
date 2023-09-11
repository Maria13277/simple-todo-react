import React from 'react'

import TaskList from './../taskList/TaskList'
import './../main/main.css'

import Button from '../ui/button/Button'
import Search from './../ui/search/Search'
import { useState } from 'react'


export default function Main() {
    const [taskList, setTasklist] = useState([])
    const [searchMain, setSearchMain] = useState('')

    function onClickButtonDelete(taskId) {
        let updatedTaskList = taskList.filter(item => item.id !== taskId)
        setTasklist(updatedTaskList)
    }

    function updatedTask(taskId, newData) {
        let newTaskList = taskList.map(task => {
           if (task.id == taskId) {
                task = {
                    ...task,
                    ...newData, 
                }
            }

           return task
        }) 

        setTasklist(newTaskList)
    }

    function onClickAddButton() {
        let newTaskList = []
        let lastItem = taskList[taskList.length -1]

        if (lastItem) {
            newTaskList = [...taskList, {id: lastItem.id + 1, title: '', description: '', data: new Date(Date.now()).toLocaleDateString(), done: false}] 
        } else {
            newTaskList = [{id: 1, title: '', description: '', data: new Date(Date.now()).toLocaleDateString(), done: false}]
        }

        setTasklist(newTaskList)
    }

  
    return (
        <div className="main">
            <Search onChangeSearchTask={setSearchMain}/>
            <TaskList taskList={taskList} onClickDelete={onClickButtonDelete} onUpdateTask={updatedTask} searchTask={searchMain}/>
            <Button onClickHandler={onClickAddButton}/>
        </div>
    );
}