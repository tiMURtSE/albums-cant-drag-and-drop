import React, { useState } from 'react'
import { apiKey } from './utils/consts';
import Input from './components/ui/input/Input';

function App() {
    const [input, setInput] = useState('');
    const [albumMatches, setAlbumMatches] = useState([]);

    const fetchAlbumMatches = async (): Promise<void> => {
        const url: string = 'http://ws.audioscrobbler.com/2.0/?';
        const params: string = new URLSearchParams({
            method: 'album.search',
            album: input,
            api_key: apiKey,
            format: 'json',
        }).toString();

        const response = await fetch(url + params);
        const albumMatches = await response.json();

        console.log(albumMatches);
    };
    
    return (
        <div className="App">
            <div style={{ margin: '100px' }}>
                <Input />
            </div>
            <button onClick={fetchAlbumMatches}>Поиск</button>
        </div>
    )
}

export default App;
