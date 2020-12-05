import { AppThunk } from '../../store';
import { Project } from '../../types';
import {
    getProjectsListSuccess,
    getProjectsListFailed
} from './slice';
import { fetchProjectList } from "./api";

export const getProjectsList = () : AppThunk => async (dispatch) => {
    try {
        const projectList : Project[] = await fetchProjectList()
        dispatch(getProjectsListSuccess(projectList))
    }catch(error){
        dispatch(getProjectsListFailed(error.toString()))
    }
}