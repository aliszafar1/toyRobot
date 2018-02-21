import { robotPlace, robotMove, robotRight, robotLeft, robotReport, invalidCommand } from '../action';
import { PLACE, MOVE, RIGHT, LEFT, REPORT, INVALID_COMMAND } from '../constants';

describe('Robot Actions', () => {
    it('robotReport should create PLACE action', () => {
        expect(robotPlace('PLACE 0,0 EAST')).toEqual({
            type: PLACE,
            payload: 'PLACE 0,0 EAST'
        });
    });

    it('robotReport should create MOVE action', () => {
        expect(robotMove()).toEqual({
            type: MOVE
        });
    });

    it('robotReport should create RIGHT action', () => {
        expect(robotRight()).toEqual({
            type: RIGHT
        });
    });

    it('robotReport should create LEFT action', () => {
        expect(robotLeft()).toEqual({
            type: LEFT
        });
    });

    it('robotReport should create REPORT action', () => {
        expect(robotReport()).toEqual({
            type: REPORT
        });
    });

    it('robotReport should create INVALID_COMMAND action', () => {
        expect(invalidCommand()).toEqual({
            type: INVALID_COMMAND
        });
    });
});