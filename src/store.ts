import {
    configureStore,
    getDefaultMiddleware,
    combineReducers,
    ThunkAction,
    Action
} from '@reduxjs/toolkit';
import { logger } from 'redux-logger'
import currentStroke from './modules/currentStroke/reducer';
import  historyIndex from './modules/historyIndex/reducer';
import strokes from './modules/strokes/reducer';
import { modalVisible } from './modules/modals/slice';
import { RootState } from './types';
import { projectsList } from './modules/projectsList/slice';

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
    reducer: combineReducers({
        currentStroke,
        historyIndex,
        strokes,
        modalVisible,
        projectsList
    }),
    middleware
})

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

