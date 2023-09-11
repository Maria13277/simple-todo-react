import React from 'react'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

import './../search/search.css'


export default function Search({onChangeSearchTask}) {
    const [search, setSearch] = useState('')

    const onChangeSearch = (event) => {
        let search = event.target.value
        onChangeSearchTask(search)
        setSearch(search)
    }
    
    return (
        <div className="search">
            <input
                value={search}
                type="text" 
                className="search-input" 
                placeholder='Поиск' 
                onChange={(event) => onChangeSearch(event)}
                search={search}
             />
            {/* <div className="search-button">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </div> */}
        </div>
    );
}