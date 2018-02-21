import React, { Component } from 'react';
import { TextInput } from 'react-native';
export class InputComponent extends Component {
    constructor() {
        super()
        this.state = {
            command: ''
        }
    }
    onSubmit() {
        const {command} = this.state;
        const {onCommandReceive} = this.props;
        onCommandReceive(command);
    }

    render() {
        return <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(command) => this.setState({ command })}
            onSubmitEditing={this.onSubmit.bind(this)}
            value={this.state.command}
            placeholder="Enter your command"
            autoCapitalize="characters"
            underlineColorAndroid="transparent"
            />
    }
}