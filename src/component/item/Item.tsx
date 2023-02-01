import MyButton from "../myButton/MyButton";
import "./Item.css"

function Item({data}: {data: string}){
    return(
        <div className="flex">
            {data}    
            <MyButton type="button" theme="cancel">
            Delete</MyButton>
        </div>
    );
}

export default Item;