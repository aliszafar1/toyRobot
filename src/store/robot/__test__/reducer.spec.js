import RobotReducer, { initialState } from '../reducer';
import { PLACE, MOVE, RIGHT, LEFT, REPORT, INVALID_COMMAND } from '../constants';
const state = { isPlaced: true, direction: 'EAST', y: 0, x: 0, output: 0 }

describe('Robot Reducer', () => {
    it('should provide initial state', () => {
        expect(RobotReducer(undefined, {})).toEqual(initialState);
    });

    describe('ROBOT PLACE Action', () => {
        it('should place an action ', () => {
            expect(RobotReducer(initialState, {
                type: PLACE,
                payload: 'PLACE 0,0 EAST'
            })).toEqual({
                isPlaced: true,
                direction: 'EAST',
                output: '',
                x: 0,
                y: 0
            });
        });

        it('should not place an action ', () => {
            expect(RobotReducer(initialState, {
                type: PLACE,
                payload: 'PLACE 5,0 EAST'
            })).toHaveProperty('output', 'Invalid Command');
        });
    })

    describe('ROBOT MOVE Action', () => {
        it('should move robot', () => {
            expect(RobotReducer(state, {
                type: MOVE
            })).toEqual({
                isPlaced: true,
                direction: 'EAST',
                output: '',
                x: 1,
                y: 0
            })
        })
    })

    describe('ROBOT LEFT Action', () => {
        it('should change direction of robot 90 degree left', () => {
            expect(RobotReducer(state, {
                type: LEFT
            })).toEqual({
                isPlaced: true,
                direction: 'NORTH',
                output: '',
                x: 0,
                y: 0
            })
        })
    })

    describe('ROBOT RIGHT Action', () => {
        it('should change direction of robot 90 degree right', () => {
            expect(RobotReducer(state, {
                type: RIGHT
            })).toEqual({
                isPlaced: true,
                direction: 'SOUTH',
                output: '',
                x: 0,
                y: 0
            })
        })
    })

    describe('ROBOT INVALID Action', () => {
        it('should change direction of robot 90 degree right', () => {
            expect(RobotReducer(state, {
                type: INVALID_COMMAND
            })).toEqual({
                isPlaced: true,
                direction: 'EAST',
                output: 'Invalid Command',
                x: 0,
                y: 0
            })
        })
    })
});