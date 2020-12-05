import { RootState } from '../../types'

export const modalNameSelector = (state : RootState) => state.modalVisible.modalName
export const modalIsShownSelector = (state : RootState) => state.modalVisible.isShown