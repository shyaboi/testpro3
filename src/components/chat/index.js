import React from "react";
import "./style.css";
// import ReactDOM from 'react-dom'


class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()  

        this.state = {
            value: '',
            chat: []
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
        this.setState({chat: itemsArray});
        var items = this.state.chat.concat(itemsArray);
        this.setState({chat: items})

        event.preventDefault();
        this.state.value = ""
    }

    render() {

        console.log(this.state.chat)
        const items = this.state.chat.map((item) => <li>{item}</li>);

        return (
            
            <form id='chat'
                onSubmit={
                    this.handleSubmit
            }>
                <label>
                    <input ref={(ref) => this.mainInput= ref} type="text"
                        value={
                            this.state.value
                        }
                        onChange={
                            this.handleChange
                        }/>
                </label>
                <input id='butt' type="submit" value="Chat"/>
                <ul ref={this.myRef} id='k'>
                    {items}</ul>
            </form>
        );
    }

}

export default Chat;
