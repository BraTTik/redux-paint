import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type ModalState = {
    isShown: boolean
    modalName: string | null
}

const initialState : ModalState = {
    isShown: false,
    modalName: null
}

const slice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        show: (state, action: PayloadAction<string>) => {
            state.isShown = true;
            state.modalName = action.payload
        },
        hide: (state) => {
            state.isShown = false;
            state.modalName = null
        }
    }
})

export const modalVisible = slice.reducer;
export const { show, hide } = slice.actions