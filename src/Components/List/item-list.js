import React from "react";
import './item-list.css';



const List = (props) => {
    const {data, onItemSelected, children:renderLabel} = props;
    const elements = data.map((item) => {
             const {id, name} = item;
             const label = renderLabel(item);
             return(
                 <li key = {id + name} className="list-group-item"
                     onClick={()=>onItemSelected(id)}>
                     {label}
                 </li>
             );
         });

    return(

        <ul  className="list-group list-group-flush">
            {elements}
        </ul>
    )

}



export default List;