import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './../buttonTask/buttonTask.css'

export default function ButtonTask({icon, onClickHandler, taskId}) {
  
    return (
      <>
        <div className="button-item" onClick={() => onClickHandler(taskId)}>
          <FontAwesomeIcon  icon={icon}/>
        </div>
      </>
    );
  }