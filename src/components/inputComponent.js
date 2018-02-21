import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

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
        this.setState({ command: '' });
        this.refs.commandInput.clear();
    }

    render() {
        return <TextInput
            ref="commandInput"
            style={styles.input}
            onChangeText={(command) => this.setState({ command })}
            onSubmitEditing={this.onSubmit.bind(this)}
            value={this.state.command}
            placeholder="Enter your command"
            autoCapitalize="characters"
            underlineColorAndroid="transparent"
            disableFullscreenUI={true}
            />
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
})