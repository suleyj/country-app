import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Search from './Search';
import Dropdown from './Dropdown';
import Countries from './Countries'

const Home = () => {
  const url = "https://restcountries.com/v2/all"
const [data, setdata] = useState([]);

useEffect(() => {
  axios.get(url).then((res) => {
    setdata(res.data);
  });
}, []);

const [search, setsearch] = useState('');

const searchChange = (e)=>{
  setsearch(e.target.value)
}

const [active, setActive] = useState(false);
const  [select, setselect] = useState('Filter by Region');

const selectChange =(e)=>{
  setselect(e.target.innerHTML)
  setActive(!active) 
}

const filteredCountries = data.filter(item=>{
  if(select === "Filter by Region" || select === "No Filter")
    return item
  return item.region === select
}).filter(item=>{
  if(search === ""){
    return item
  }
  else{
   return item.name.toLowerCase().includes(search.toLocaleLowerCase())
  }
})

  return <div>
     <div className='input-c'>
       <div className='input-container'>
        <Search searchChange={searchChange}/>
        <Dropdown selectChange={selectChange} active={active} select={select} activeChange={setActive}/>
       </div>
      </div>
     <Countries data={filteredCountries}/>
  </div>;
};

export default Home;
