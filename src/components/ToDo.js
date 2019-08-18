import React from 'react';

export default class extends React.Component {
    constructor(){
        super();
        this.state = {
            list: [],
            title: ''
        };
    }

    addTask = () => {
        const newList = [...this.state.list, {
            value: this.state.title
        }];
        this.setState({
            list: newList
        });
    }

    changeTitle (val) {
        this.setState({
            title: val
        })
    }

    removeTask (i) {
        const list = [...this.state.list];
        list.splice(i, 1);
        this.setState({list});
    }
    render(){
        const listLi = this.state.list.map((el, i) => {
            return <li key={i} onDoubleClick={() => this.removeTask(i)}>
                {el.value}
            </li>
        });

        return (
            <div>
                <input type="text" value={this.state.title} onChange={(e) => this.changeTitle(e.target.value)} />
                <button onClick={this.addTask}>Add task</button>
                <hr/>
                <ul>
                    {listLi}
                </ul>
            </div>
        );
    }
}