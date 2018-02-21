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
            ROBOT_PLACE: robotPlace,
            ROBOT_MOVE: robotMove,
            ROBOT_RIGHT: robotRight,
            ROBOT_LEFT: robotLeft,
            ROBOT_REPORT: robotReport,
        }
        const action = mapActions[command] || invalidCommand;
        action();
    }
    render() {
        const {x, y, output} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Toy Robot</Text>
                <ScrollView>
                    <OutputComponent output={output} />
                    <BoardComponent x={x} y={y} />
                    <InputComponent onCommandReceive={this.onCommandReceive.bind(this)} />
                </ScrollView>
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
        robotPlace: () => dispatch(robotPlace()),
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
