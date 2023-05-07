import React from "react";


const Dropdown = ({selectChange, active, select, activeChange}) => {
  
  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={activeChange}>
        <span>{select}</span>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </button>
      {active ? (
        <div className="dropdown-content">
          <div className="dropdown-item" onClick={selectChange}>
            No Filter
          </div>
          <div className="dropdown-item" onClick={selectChange}>
            Africa
          </div>
          <div className="dropdown-item" onClick={selectChange}>
            Americas
          </div>
          <div className="dropdown-item" onClick={selectChange}>
            Asia
          </div>
          <div className="dropdown-item" onClick={selectChange}>
            Europe
          </div>
          <div className="dropdown-item" onClick={selectChange}>
            Oceania
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
