import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project } from '../../types';

export type ProjectState = {
    error : string | null
    pending : boolean
    projects : Project[]
}

const initialState : ProjectState = {
    error: null,
    pending: true,
    projects: []
}


const slice = createSlice({
    name: 'projectsList',
    initialState,
    reducers: {
        getProjectsListSuccess: (state, action: PayloadAction<Project[]>) => {
            state.error = null;
            state.pending = false;
            state.projects = action.payload;
        },
        getProjectsListFailed: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.pending = false;
            state.projects = [];
        }
    }
})

export const projectsList = slice.reducer;
export const {
    getProjectsListSuccess,
    getProjectsListFailed
} = slice.actions;