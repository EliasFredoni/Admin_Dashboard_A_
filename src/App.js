import { useState } from 'react';
import './App.css'
import React from 'react'


const data = require("./building.json")

function App() {

const [search, setSearch] = useState('');

const onChange = (event) => {
  setSearch(event.target.value);
}

  return (
    <div className="App">
  <h1>: _Admin_Dahboard_ :</h1>

<div >
  <button onClick={() => data.sort((a,b) => a.emission < b.emission ? -1 : 1)}>Emission sortieren</button>
</div>

  <input type='text' value={search} onChange={onChange} placeholder='Suche Straßennamen'/>

  <div className='data'>
    {data
    .sort((a,b) => a.emission > b.emission ? 1 : -1)
    .filter(item => item.street.includes(search))
    .map(data => {
      return(
        <div key={data.id}>
        <input type="checkbox" id="favorite" name="favorite" value="favorite"/>
        {data.street} - {data.emission} &#11088;
        </div>
      )
    })}
   
  </div>

  
  
    </div>
  );
}

export default App;
