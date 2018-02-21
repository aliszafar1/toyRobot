import {
    ROBOT_PLACE,
    ROBOT_MOVE,
    ROBOT_RIGHT,
    ROBOT_LEFT,
    ROBOT_REPORT,
    INVALID_COMMAND
} from './constants';

export function robotPlace(payload) {
    return {
        type: ROBOT_PLACE,
        payload
    }
}

export function robotMove(payload) {
    return {
        type: ROBOT_MOVE,
        payload
    }
}
export function robotRight(payload) {
    return {
        type: ROBOT_RIGHT,
        payload
    }
}
export function robotLeft(payload) {
    return {
        type: ROBOT_LEFT,
        payload
    }
}
export function robotReport(payload) {
    return {
        type: ROBOT_REPORT,
        payload
    }
}
export function invalidCommand() {
    return {
        type: INVALID_COMMAND
    }
}
