import React from 'react';
import Search from './Search';

export default function Header({ onSearch }) {
    return (
        <header className="header">
            <h1 className="title">Movie App🎬</h1>
            <Search onSearch={onSearch} />
        </header>
    );
}
