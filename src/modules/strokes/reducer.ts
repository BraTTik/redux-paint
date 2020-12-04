import { RootState } from '../../types';
import { 
    endStroke
} from '../sharedActions';
import {
    createSlice
} from '@reduxjs/toolkit';

const initialState : RootState['strokes'] = []

const strokes = createSlice({
    name: 'strokes',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(endStroke, (state, action) => {
            const { stroke, historyIndex } = action.payload
            if(historyIndex === 0){
                state.push(stroke)
            }else{
                state.splice(-historyIndex, historyIndex, stroke)
            }
        })
    }
})

export default strokes.reducer