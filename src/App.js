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

  return (
    <div className="App">
  <h1>: _Admin_Dahboard_ :</h1>

<div >
  <button className='sort_button' onClick={sort}>Emission sortieren</button>
</div>

  <input type='text' value={search} onChange={onChange} placeholder='Suche Straßennamen'/>

  <div className='data'>
    {data
    .filter(item => item.street.includes(search))
    .map(data => {
      return(
        <div key={data.id}>
        <input type="checkbox"/>
        {data.street} - {data.emission} 
        </div>
      )
    })}
   
  </div>

  
  
    </div>
  );
}

export default App;
