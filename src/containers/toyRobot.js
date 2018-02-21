import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { connect, dispatch } from 'react-redux';

import { BoardComponent } from '../components/boardComponent';
import { InputComponent } from '../components/inputComponent';
import { OutputComponent } from '../components/outputComponent';

import {
    robotPlace,
    robotMove,
    robotRight,
    robotLeft,
    robotReport,
    invalidCommand
} from '../store/robot/action';

class ToyRobot extends Component {
    onCommandReceive(command) {
        const {robotPlace, robotLeft, robotRight, robotMove, robotReport, invalidCommand} = this.props;
        const mapActions = {
            PLACE: robotPlace,
            MOVE: robotMove,
            RIGHT: robotRight,
            LEFT: robotLeft,
            REPORT: robotReport,
        }
        const roboAction = (command.includes("PLACE") && 'PLACE' || command);
        const action = mapActions[roboAction] || invalidCommand;
        action(command);
    }
    render() {
        const {x, y, output} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Toy Robot</Text>
                <OutputComponent output={output} />
                <BoardComponent x={x} y={y} />
                <InputComponent onCommandReceive={this.onCommandReceive.bind(this)} />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        x: state.RobotReducer.x,
        y: state.RobotReducer.y,
        output: state.RobotReducer.output
    }
}

function mapDispatchToProps(dispatch) {
    return {
        robotPlace: (payload) => dispatch(robotPlace(payload)),
        robotMove: () => dispatch(robotMove()),
        robotRight: () => dispatch(robotRight()),
        robotLeft: () => dispatch(robotLeft()),
        robotReport: () => dispatch(robotReport()),
        invalidCommand: () => dispatch(invalidCommand())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToyRobot)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: '#aaa',
        paddingBottom: 5
    }
});