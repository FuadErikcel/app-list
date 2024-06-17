
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-cyan/theme.css";


 const TextBox = props => {
    const { handleAddItem } = props;
    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault(); 
        handleAddItem({
          done: false,
          id: (+new Date()).toString(),
          value
        });
        setValue("");
    };
    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="textBox">
                <InputTextarea variant="filled" value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
            </div><div className="card flex justify-content-center">
                    <Button label="Agregar Tarea" disabled={value ? "" : "disabled"} />
                </div>
            </form>
        </>
    )
}

export default TextBox;
        