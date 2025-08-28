import { useState, useEffect } from 'react';
import './ListItem.less';

export const ListItem = (props) => {
    const [addItem, setAddItem] = useState(true);

    useEffect(() => {
        if(props.type == "playlist") {
            setAddItem(false);
        }
    }, []);

    return (
        <li className="track" key={props.song.id}>
            <span className="title">{props.song.title}</span>
            <span className="sub-title">{props.song.artist}</span>
            <button type="button" className={addItem ? "add-item" : "remove-item"}>
                {addItem ? "+" : "-"}
            </button>
        </li>          
    )
}