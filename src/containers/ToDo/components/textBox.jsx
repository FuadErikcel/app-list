import React, { useState, useEffect } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-cyan/theme.css";

const TextBox = ({ handleAddItem, handleEditItem, editingTask }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (editingTask) {
      setValue(editingTask.name);
    } else {
      setValue("");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      if (editingTask) {
        console.log('Updating task:', {
          ...editingTask,
          name: value,
        });
        handleEditItem({
          ...editingTask,
          name: value,
        });
      } else {
        handleAddItem({
          name: value,
          id: (+new Date()).toString(),
        });
      }
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
          <Button label={editingTask ? "Actualizar Tarea" : "Agregar Tarea"} type="submit" disabled={!value} />
        </div>
      </form>
    </>
  );
};

export default TextBox;
