import {
    PLACE,
    MOVE,
    RIGHT,
    LEFT,
    REPORT,
    INVALID_COMMAND
} from './constants';

export function robotPlace(payload) {
    return {
        type: PLACE,
        payload
    }
}
export function robotMove(payload) {
    return {
        type: MOVE,
        payload
    }
}
export function robotRight(payload) {
    return {
        type: RIGHT,
        payload
    }
}
export function robotLeft(payload) {
    return {
        type: LEFT,
        payload
    }
}
export function robotReport(payload) {
    return {
        type: REPORT,
        payload
    }
}
export function invalidCommand() {
    return {
        type: INVALID_COMMAND
    }
}
