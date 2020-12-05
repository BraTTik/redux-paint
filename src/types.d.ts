import { ModalState } from "./modules/modals/slice"
import { ProjectState } from './modules/projectsList/slice';

export type RootState = {
    currentStroke : Stroke;
    strokes : Stroke[];
    historyIndex : number;
    modalVisible : ModalState;
    projectsList: ProjectState;
}

export type Stroke = {
    points : Point[];
    color : string;
}

export type Point = {
    x : number;
    y : number;
}

export type Project = {
    image : string
    name : string
    id : string
}