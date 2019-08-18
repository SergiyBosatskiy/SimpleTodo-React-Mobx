import React from 'react';
import { observer } from 'mobx-react';
import model from '../store/todo'

export default observer(function () {
    
    
        const listLi = model.list.map((el, i) => {
            return <li key={i} onDoubleClick={() => model.removeTask(i)}>
                {el.value}
            </li>
        });

        return (
            <div>
                <input type="text" value={model.title} onChange={(e) => model.setTitle(e.target.value)} />
                <button onClick={model.addTask} disabled={!model.canAdd}>Add task</button>
                <hr/>
                <ul>
                    {listLi}
                </ul>
            </div>
        );
    
})