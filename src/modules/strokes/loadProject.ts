import { AppThunk } from '../../store';
import { getProject } from './api';
import { setStrokes } from './reducer';

export const loadProject = 
    (id : string) : AppThunk => async (dispatch) => {
        try{
            const { project } = await getProject(id);
            dispatch(setStrokes(project.strokes))
        }catch(error){
            console.log(error.message);
        }
    }