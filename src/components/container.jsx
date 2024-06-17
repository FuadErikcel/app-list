import { useState } from "react";
import TextBox from "./textBox";
import TaskList from "./taskList";

const Container = () => {
    const [list, setList] = useState([]);
    const handleAddItem = addItem =>{
        setList([...list, addItem]);
    }

    return(
        <div>
            <TextBox handleAddItem={handleAddItem}/>
            <TaskList list={list} setList={setList}/>
        </div>

    );
}

export default Container;