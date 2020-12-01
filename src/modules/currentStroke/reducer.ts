import { RootState } from '../../types';
import { 
    StrokeAction,
    beginStroke,
    updateStroke,
    endStroke,
    setStrokeColor
} from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState : RootState['currentStroke'] = {
    points: [],
    color: '#000'
}

export const reducer = createReducer(initialState, (builder) => {
    builder.addCase(beginStroke, (state, action) =>{
        state.points = [action.payload]
    })
    builder.addCase(updateStroke, (state, action) => {
        state.points.push(action.payload)
    })
    builder.addCase(endStroke, (state, action)=>{
        state.points = []
    })
    builder.addCase(setStrokeColor, (state, action) => {
        state.color = action.payload
    })
})