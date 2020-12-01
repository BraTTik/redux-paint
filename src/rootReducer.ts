import { RootState } from './types';
import { Action, BEGIN_STROKE, END_STROKE, SET_STROKE_COLOR, UPDATE_STROKE, UNDO, REDO } from './actions'

const initialState : RootState = {
    currentStroke: {points: [], color: "#000"},
    strokes: [],
    historyIndex: 0
}

export const rootReducer = (
    state : RootState = initialState,
    action : Action
) => {
    switch(action.type){
        case BEGIN_STROKE: {
            const strokes = state.strokes.slice(0, state.strokes.length - state.historyIndex)
            return {
                ...state,
                currentStroke: {
                    ...state.currentStroke,
                    points: [action.payload]
                },
                historyIndex: 0,
                strokes
            }
        }
        case UPDATE_STROKE: {
            return {
                ...state,
                currentStroke: {
                    ...state.currentStroke,
                    points: [...state.currentStroke.points, action.payload]
                }
            }
        }
        case END_STROKE: {
            return {
                ...state,
                currentStroke: {...state.currentStroke, points: []},
                strokes: [...state.strokes, state.currentStroke]
            }
        }
        case SET_STROKE_COLOR: {
            return {
                ...state,
                currentStroke: {...state.currentStroke, ...{color: action.payload}}
            }
        }
        case UNDO: {
            let historyIndex = state.historyIndex + 1;
            if(historyIndex > state.strokes.length){
                historyIndex = state.strokes.length ;
            }
            return {
                ...state,
                historyIndex
            }
        }
        case REDO: {
            let historyIndex = state.historyIndex - 1;
            if(historyIndex < 0){
                historyIndex = 0
            }
            return {
                ...state,
                historyIndex
            }
        }
        default:
            return state
    }
}