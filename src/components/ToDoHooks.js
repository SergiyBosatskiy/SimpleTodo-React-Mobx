import React, {useState} from 'react';

export default function () {

    const [list, setState] = useState([]);

    const addTask = () => {
        const newList = [...list, {
            value: Math.random()
        }];
        setState(newList);
    }

    const listLi = list.map((el, i) => {
        return <li key={i}>{el.value}</li>
    });

    return (
        <div>
            <input type="text" />
            <button onClick={addTask}>Add task</button>
            <hr/>
            <ul>
                {listLi}
            </ul>
        </div>
    );
}
