import {
    ROBOT_PLACE,
    ROBOT_MOVE,
    ROBOT_RIGHT,
    ROBOT_LEFT,
    ROBOT_REPORT
} from './constants';

export const initialState = {
    isPlaced: false,
    x: -1,
    y: -1,
    output: '',
    direction: 'NORTH'
};

export default function RobotReducer(state = initialState, action) {
    const {type, payload} = action;
    const {isPlaced} = state;
    switch (type) {
        case 'ROBOT_PLACE':
            return {
                ...state,
                isPlaced: true,
                x: 0,
                y: 0,
                output: ''
            }
        case 'ROBOT_RIGHT': {
            if (isPlaced) {
                let {x, y} = state;
                (x < 4) && (x += 1);
                return {
                ...state,
                    isPlaced: true,
                    x,
                    output: ''
                }
            }
            return {
                ...state,
                output: 'Invalid Command'
            }

        }
        case 'ROBOT_LEFT': {
            if (isPlaced) {
                let {x, y} = state;
                (x > 0) && (x -= 1);
                return {
                ...state,
                    isPlaced: true,
                    x,
                    output: ''
                }
            }
            return {
                ...state,
                output: 'Invalid Command'
            }
        }
        case 'ROBOT_REPORT': {
            const {x, y, direction} = state;
            return {
                ...state,
                output: `x = ${x} y = ${y} ${direction}`
            }
        }
        case 'INVALID_COMMAND': {
            return {
                ...state,
                output: 'Invalid Command'
            }
        }
        default:
            return state
    }
}