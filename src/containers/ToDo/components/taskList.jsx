import React from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { ListBox } from "primereact/listbox";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";

const TaskList = ({
  tasks,
  selectedTasks,
  setSelectedTasks,
  handleDeleteItems,
  setEditingTask
}) => {
  const renderItemp = (item) => {
    return (
      <div>
        <label>{item.name}</label>
        {/* <Button label="Eliminar Tarea" onClick={handleDeleteItems} /> */}
        <div>
          <i className="pi pi-trash" onClick={handleDeleteItems}  style={{ fontSize: '1.5rem' }}></i>
          <i className="pi pi-pen-to-square" onClick={handleEditSelected}  style={{ fontSize: '1.5rem' }}></i>
          {/* <Button
            label="Editar Seleccionado"
            onClick={handleEditSelected}
            className="ml-2"
          /> */}
        </div>
      </div>
    );
  };

  const handleEditSelected = () => {
    if (selectedTasks.length === 1) {
      setEditingTask(selectedTasks[0]);
    } else {
      alert("Seleccione una sola tarea para editar.");
    }
  };

  return (
    <div>
      <ListBox
        multiple
        value={selectedTasks}
        itemTemplate={renderItemp}
        onChange={(e) => setSelectedTasks(e.value)}
        options={tasks}
        optionLabel="name"
        className="w-full md:w-14rem"
        emptyMessage="No hay tareas disponibles"
      />
      {selectedTasks.length > 0 && (
        <div className="card flex justify-content-center mt-2">
        </div>
        
      )}
    </div>
  );
};

export default TaskList;
