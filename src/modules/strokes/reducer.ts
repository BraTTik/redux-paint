import { RootState } from '../../types';
import { 
    StrokesAction,
    END_STROKE
} from './actions';

export const reducer = (state : RootState['strokes'] = [], action : StrokesAction) => {
    switch(action.type){
        case END_STROKE:
            const { stroke, historyLimit } = action.payload;
            if(!stroke.points.length){
                return state;
            }
            return [...state.slice(0, state.length - historyLimit), stroke];
        default:
            return state;
    }
}