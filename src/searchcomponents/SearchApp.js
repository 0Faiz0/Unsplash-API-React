import React, { useState } from 'react';
import axios from 'axios';
import './SearchApp.css';

function SearchApp() {
    const [photo, setPhoto] = useState("");
    const [clientId, setClienId] = useState("67BCxl2nbP3OR6vUVcFvPUcasaxe60Z3CELfWfvmuDY");
    
    const [result, setResult] = useState([]);

    function handleChange(event){
        setPhoto(event.target.value);
    }

    function handleSubmit(event){
        console.log(photo);

        const url = "https://api.unsplash.com/search/photos?page=1&per_page=12&query="+photo+"&client_id="+clientId;

        axios.get(url).then(response => {
            console.log(response);
            setResult(response.data.results);
        });
    }
    return (
        <div className="SearchApp">
            <div className="form">
                <input 
                    type="text"
                    onChange={handleChange}
                    placeholder="search....">
                </input>
                <button type="submit" onClick={handleSubmit}>search</button>
            </div>
            <div className="imagesbaby">
                {result.map((photo) => (
                    <img src={photo.urls.regular} />
                ))}
            </div>  
        </div>
    );
}

export default SearchApp;