import React, {Component} from "react";

export class SearchForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        console.log(event.target.value)
        this.setState({value: event.target.value});
    }

    handleSubmit(event: any) {
        alert("E' stato inserito un nome: " + this.state.value);
        event.preventDefault();
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome:
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

