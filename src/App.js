import { useState } from 'react';
import './App.css'
import React from 'react'

const data = require("./building.json")

function App() {

const [search, setSearch] = useState('');

const onChange = (event) => {
  setSearch(event.target.value);
}

const sort = () => {
  data.sort((a,b) => a.emission > b.emission ? 1 : -1)
}

const star = (e) => {
alert("Auf Favorit gesetzt! 🌟")
}

  return (
  <div className="App">
    <h1>: _Admin_Dahboard_ :</h1>

    <div className='board'>

      <button className='sort_button' onClick={sort}>Emission sortieren</button>
      <input type='text' value={search} onChange={onChange} placeholder='Suche Straßennamen'/>
        <div >
        {data
        .filter(item => item.street.includes(search))
        .map(data => {
        return(
        <div key={data.id}>
        <input type="checkbox" id='a' name='favorite' onChange={star}/>
        {data.street} - {data.emission} 

        

        </div>
        )
        })}
      </div>

    </div>

  </div>
  );
}

export default App;
