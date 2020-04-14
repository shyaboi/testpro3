import React from "react";
import "./style.css";
// import ReactDOM from 'react-dom'


class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            toDoList: ['Previous Chat']
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        if (this.state.value === '') {
            alert('Put some words in the box son')
            return
        }


        const itemsArray = this.state.value.split(',');
        this.setState({toDoList: itemsArray});
        var items = this.state.toDoList.concat(itemsArray);
        this.setState({toDoList: items})
        event.preventDefault();
        this.state.value = ""
    }

    // componentDidUpdate() {
    //     const element = document.getElementById('li');

    //     element.scrollIntoView({behavior: 'smooth'});
    // }

    render() {

        console.log(this.state.toDoList)
        const items = this.state.toDoList.map((item) => <li>{item}</li>);

        return (

            <form id='chat'
                onSubmit={
                    this.handleSubmit
            }>
<div id='grid-container'>
                <label>
                    <input ref={
                            (ref) => this.mainInput = ref
                        }
                        type="text"
                        value={
                            this.state.value
                        }
                        onChange={
                            this.handleChange
                        }/>
                <button id='close' onClick={this.props.closePopup}>close me</button> 

                <input id='butt' type="submit" value="Chat"/>
                </label>
            </div>
                <div id='grid-containe2'>
                <ul id='k'>
                    {items}</ul>
                </div>
            </form>
            );

    }
}


export default Chat;
