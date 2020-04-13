import React from "react";
import "./style.css";
import ReactDOM from 'react-dom'


class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            toDoList: ['dave', 'davee2', 'save3']
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        const itemsArray = this.state.value.split(',');
        this.setState({toDoList: itemsArray});
    }

    render() {
        const items = this.state.toDoList.map((item) => <li>{item}</li>);

        return (
            <form id='chat'
                onSubmit={
                    this.handleSubmit
            }>
                <ul id='k'>
                    {items}</ul>
                <label>
                    Chat
                    <input type="text"
                        value={
                            this.state.value
                        }
                        onChange={
                            this.handleChange
                        }/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }

}

export default Chat;
