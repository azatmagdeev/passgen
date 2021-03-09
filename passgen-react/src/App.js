import './style.css';
import Form from "./components/Form";
import Result from "./components/Result";
import React, {Component} from "react";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwords: [
                '111', '222', '333'
            ]
        }
    }

    render() {
        return (
            <div className="App">
                <h1>Password Generator</h1>
                <section>
                    <Form/>
                    <Result passwords={this.state.passwords}/>
                </section>
            </div>
        );
    }
}

export default App;
