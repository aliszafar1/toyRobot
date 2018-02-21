import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native";

export class OutputComponent extends Component {
    render() {
        const {output} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{output}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    text: {
        color: 'red',
        textAlign: 'right',
        fontSize: 15
    }
});