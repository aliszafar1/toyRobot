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
export function robotMove() {
    return { type: MOVE }
}
export function robotRight() {
    return { type: RIGHT }
}
export function robotLeft() {
    return { type: LEFT }
}
export function robotReport() {
    return { type: REPORT }
}
export function invalidCommand() {
    return { type: INVALID_COMMAND }
}