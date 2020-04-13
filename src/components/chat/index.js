import "./style.css";
import React, { Component, useRef, useEffect } from 'react';
import { render } from 'react-dom';
// import ReactDOM from 'react-dom'


class Chat extends React.Component {
    
    constructor(props) {
        super(props);
      
        const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
        const useMountEffect = (fun) => useEffect(fun, [])
        
        const ScrollDemo = () => {
            const myRef = useRef(null)
        
            useMountEffect(() => scrollToRef(myRef)) // Scroll on mountA
        }
        
        this.state = {
            value: '',
            toDoList: []
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

    render() {

        console.log(this.state.toDoList)
        const items = this.state.toDoList.map((item) => <li>{item}</li>);

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
