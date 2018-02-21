import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
export class BoardComponent extends Component {

    render() {
        const {x, y} = this.props;
        const rows = 5
            , cols = 5
            , matrix = Array.from(new Array(rows), (val, row) => {
                const elms = Array.from(new Array(cols), (val, col) => {
                    return <View key={col} style={[styles.col, row === y && col === x && styles.selected]} />
                });
                return <View key={row} style={styles.row}>{elms}</View>
            }).reverse();
        return (
            <View style={styles.container}>
                {matrix}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row'
    },
    col: {
        borderColor: '#aaa',
        borderWidth: 1,
        width: 50,
        height: 50,
    },
    selected: {
        backgroundColor: '#333'
    },

});