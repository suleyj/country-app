import React from 'react';



const Search = ({searchChange}) => {
  return <div className='search-box'>
  <ion-icon name="search-outline"></ion-icon>
  <input className="search" type="search" placeholder="Search.." onChange={searchChange}/>
</div>;
};

export default Search;
