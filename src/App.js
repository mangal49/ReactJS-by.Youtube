import React, { Component } from 'react';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

class App extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            message: "UnLike",
            type: ""
        };
        this.changeMessage = this.changeMessage.bind(this);
        this.insertData = this.insertData.bind(this);
    }

    changeMessage(){
        this.setState({message: "Like"});
    }
    insertData(){
        var item = " REACT ";
        var myArray = this.state.data;
        myArray.push(item);
        this.setState({data: myArray});
    }
    onChange(event){
        this.setState({type: event.target.value});
    }

    render(){
        return (
            <div>
                <Header/>
                <Content title="Course React" name="Montri Wiwatsakunwet" price="Free"/>
                <Footer/>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeMessage}>{this.state.message}</button><br/>
                <h1>{this.state.data}</h1>
                <button onClick={this.insertData}>Insert</button><br/>
                <input type="text" onChange={this.onChange.bind(this)}/>
                <h1>Welcome: {this.state.type}</h1>
            </div>
        )
    }
}

export default App; 
