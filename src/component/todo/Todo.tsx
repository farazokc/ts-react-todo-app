import { useEffect, useState } from "react";
import AddForm from "../addForm/AddForm";
import List from "../list/List";
import Logout from "../logout/Logout";

function Todo () {
    useEffect(() => {
        const interval = setInterval(() => console.log("Running"), 1000);
        return () => {
            clearInterval(interval);
        }
      }, []);

    const [items, setItems] = useState<string[]>(["Hello", "Welcome", "Goodbye"]);
    const addItemHandler = (itemText: string) => {
        setItems([...items, itemText]);
    }; 
    return (
        <div>
            <AddForm add={addItemHandler}/>
            <List data={items}/>
            <Logout />
        </div>
    )
}

export default Todo;