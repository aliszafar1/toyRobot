import {
    PLACE,
    MOVE,
    RIGHT,
    LEFT,
    REPORT
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
        case 'PLACE':
            const {x, y, direction} = getCoordinates(payload);
            if (x > 4 || y > 4) {
                return {
                ...state,
                    isPlaced: true,
                    x, y, direction,
                    output: ''
                }
            }
            return {
                ...state,
                output: 'Invalid Command'
            }
        case 'RIGHT': {
            if (isPlaced) {
                const direction = changeDirection(state.direction, 'right');
                return {
                ...state,
                    direction,
                    output: ''
                }
            }
            return {
                ...state,
                output: 'Invalid Command'
            }
        }
        case 'LEFT': {
            if (isPlaced) {
                const direction = changeDirection(state.direction);
                return {
                ...state,
                    direction,
                    output: ''
                }
            }
            return {
                ...state,
                output: 'Invalid Command'
            }
        }
        case 'MOVE': {
            if (isPlaced) {
                const {x, y, direction} = updateCoordinates(state);
                return {
                ...state,
                    x, y, direction,
                    output: ''
                }
            }
            return {
                ...state,
                output: 'Invalid Command'
            }
        }
        case 'REPORT': {
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

function getCoordinates(value) {
    value = value.slice(6);
    const x = parseInt(value.slice(0, 1));
    const y = parseInt(value.slice(2, 3));
    const direction = value.slice(4)
    return { x, y, direction }
}

function updateCoordinates(state) {
    let {x, y, direction} = state;
    switch (direction) {
        case 'NORTH':
            (y < 4) && (y += 1);
            break;
        case 'SOUTH':
            (y > 0) && (y -= 1);
            break;
        case 'EAST':
            (x < 4) && (x += 1);
            break;
        case 'WEST':
            (x > 0) && (x -= 1);
            break;
    }
    return { x, y, direction }
}

function changeDirection(direction, rotate) {
    const directions = ['NORTH', 'WEST', 'SOUTH', 'EAST'];
    const dirIndex = directions.indexOf(direction);
    let index;
    if (rotate === 'right') {
        dirIndex == 0 ? (index = 3) : (index = dirIndex - 1);
        return directions[index];
    } else {
        dirIndex == 3 ? (index = 0) : (index = dirIndex + 1);
        return directions[index];
    }
}