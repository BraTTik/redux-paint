import { RootState } from '../../types';
import { undo, redo, endStroke} from './actions';
import { createReducer} from '@reduxjs/toolkit'

const initialState : RootState['historyIndex'] = 0

export const reducer = createReducer(initialState, (builder) => {
    builder.addCase(undo, (state, action) => {
        return Math.min(action.payload, state + 1)
    })
    builder.addCase(redo, (state, action) => {
        return Math.max(state - 1, 0)
    })
    builder.addCase(endStroke, (state, action) => {
        return 0
    })
})