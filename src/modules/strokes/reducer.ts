import { RootState } from '../../types';
import { 
    StrokesAction,
    endStroke
} from './actions';
import {
    createReducer
} from '@reduxjs/toolkit'

const initialState : RootState['strokes'] = []

export const reducer = createReducer(initialState, (builder) => {
    builder.addCase(endStroke, (state, action) => {
        const { stroke, historyIndex } = action.payload
        if(historyIndex === 0){
            state.push(stroke)
        }else{
            state.splice(-historyIndex, historyIndex, stroke)
        }
    })
})