import React from 'react'
import { CheckBox1 } from './checkBox';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-cyan/theme.css";

const TaskList = props => {
  const {list, setList} = props;

    const onChangeStatus = e => {
        const {name, checked} = e.target;

        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setList(updateList);
    }

    const onClickRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList);
    };

    const chk = list.map(item => (
        <CheckBox1 key={item.id} data={item} onChange={onChangeStatus} />
    ));

  return (
    <div>
        {list.length ? chk : "Sin Tareas"}
        {list.length ? (
        <p>
          <Button onClick={onClickRemoveItem}>
            Eliminar Tarea
          </Button>
        </p>
      ) : null}
    </div>
  )
}

export default TaskList;
