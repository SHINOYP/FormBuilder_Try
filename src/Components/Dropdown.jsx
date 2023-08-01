import React, { useState } from "react";

const Dropdown = ({ options,selected }) => {
  const [category, setCategory] = useState();

  const handleOnChange = (event) => {
   
    if(event.target.value){
        selected(event.target.value)
    }
  };

  return (
    <div>
      <select onChange={(e) => handleOnChange(e)} className="bg-white drop-shadow-xl">
        <option value="">Choose an option</option>
        {options?.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
