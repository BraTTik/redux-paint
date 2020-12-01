import { Stroke, Point } from '../../types';
import { createAction } from '@reduxjs/toolkit';

export const BEGIN_STROKE = 'BEGIN_STROKE';
export const UPDATE_STROKE = 'UPDATE_STROKE';
export const END_STROKE = 'END_STROKE';
export const SET_STROKE_COLOR = 'SET_STROKE_COLOR';

export type StrokeAction = 
| {
    type: typeof BEGIN_STROKE;
    payload: Point;
}
|{
    type: typeof UPDATE_STROKE;
    payload: Point;
}
|{
    type: typeof END_STROKE;
    payload: {stroke: Stroke, historyLimit: number}
}
|{
    type: typeof SET_STROKE_COLOR;
    payload: string;
}

export const beginStroke = createAction<Point>('BEGIN_STROKE');

export const updateStroke = createAction<Point>('UPDATE_STROKE');

export const endStroke = createAction<{
    stroke: Stroke
    historyIndex: number
}>('END_STROKE');

export const setStrokeColor = createAction<string>('SET_STROKE_COLOR');