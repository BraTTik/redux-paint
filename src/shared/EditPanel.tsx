import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { strokesLengthSelector } from '../modules/strokes/selectors';
import { undo, redo} from '../modules/historyIndex/reducer'

export const EditPanel = () => {
    const dispatch = useDispatch();
    const strokesLength = useSelector(strokesLengthSelector);
    return (
        <div className="window edit">
            <div className="title-bar">
                <div className="title=bar-text">Edit</div>
            </div>
            <div className="window-body">
                <div className="field-row">
                    <button 
                        className="button undo"
                        onClick={ () => {
                            dispatch(undo(strokesLength))
                        }}
                    >
                        Undo
                    </button>
                    <button 
                        className="button redo"
                        onClick={ () => {
                            dispatch(redo())
                        }}
                    >
                        Redo
                    </button>
                </div>
            </div>
        </div>
    )
}