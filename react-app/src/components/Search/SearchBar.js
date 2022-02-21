import "./Search.css";
import React from 'react';
import {AiOutlineSearch} from "react-icons/ai";

const SearchBar = () => {

    return (
        <div>
        <form className="search-form" action="/search" method="get" id="search-form">
            <input id="search-field"
                type="text"
                placeholder="Search"
                name="q"
            />
            <button className="search-button" type="submit">
                <div className="search-icon"><AiOutlineSearch /></div>
                </button>
        </form >
        </div>
    )
}

export default SearchBar;