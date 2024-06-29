
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-cyan/theme.css";


const TextBox = ({ handleAddItem }) => {
    const [value, setValue] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (value.trim()) {
        handleAddItem({
          name: value,
          id: (+new Date()).toString(),
        });
        setValue("");
      }
    };
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className="textBox">
            <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
          </div>
          <div className="card flex justify-content-center">
            <Button label="Agregar Tarea" type="submit" disabled={!value} />
          </div>
        </form>
      </>
    );
  };

export default TextBox;
        