import React, { useState } from 'react';

export default function Search({ onSearch }) {
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        if (searchText.trim()) {
            onSearch(searchText);
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search movies..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button
                className="search-button"
                onClick={handleSearch}
            >Search</button>
        </div>
    );
}
