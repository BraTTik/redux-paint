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

export const beginStroke = (x : number, y : number) => {
    return {type: BEGIN_STROKE, payload: {x, y}}
}

export const updateStroke = (x : number, y : number) => {
    return { type: UPDATE_STROKE, payload: {x, y}}
}

export const endStroke = (stroke : Stroke, historyLimit : number) => {
    return { type: END_STROKE, payload: {stroke, historyLimit}}
}

export const setStrokeColor = (color : string) => {
    return { type: SET_STROKE_COLOR, payload: color}
}