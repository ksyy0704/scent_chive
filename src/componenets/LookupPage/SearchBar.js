import React, {useState} from 'react';
import styled, { css } from 'styled-components';

const SearchBar = (props)=>{
    const [SearchFor, setSearchFor] = useState("");
    const handleInputChange = (event)=>{
        setSearchFor(event.target.value);
    }

    return(
        <div>
            <input type="text" value={SearchFor} onChange={handleInputChange}></input>
        </div>
    )
}

export default SearchBar;