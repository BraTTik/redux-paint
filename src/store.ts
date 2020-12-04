import {
    configureStore,
    getDefaultMiddleware,
    combineReducers
} from '@reduxjs/toolkit';
import { logger } from 'redux-logger'
import currentStroke from './modules/currentStroke/reducer';
import  historyIndex from './modules/historyIndex/reducer';
import strokes from './modules/strokes/reducer';

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
    reducer: combineReducers({
        currentStroke,
        historyIndex,
        strokes
    }),
    middleware
})

