import React from 'react'
import {useEffect} from 'react'

import './../taskList/taskList.css'

import Task from './../task/Task'

export default function TaskList({taskList, onClickDelete, onUpdateTask, searchTask}) {
    return (
        <div className="list">
            {
                [...taskList].sort((a, b) => b.id - a.id).filter(task => task.title.toLowerCase().includes(searchTask) || task.description.toLowerCase().includes(searchTask)).map(task => {
                    return <Task task={task} onClickButtonDelete={onClickDelete} key={task.id} onUpdateTask={onUpdateTask}/>
                })
            }
        </div>
    );
}