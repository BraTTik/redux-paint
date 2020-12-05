import React from 'react';
import { useSelector } from 'react-redux';
import { ProjectsModal } from './ProjectsModal';
import { SaveProjectModal } from './SaveProjectsModal';
import { modalNameSelector } from './modules/modals/selectors';

export const ModalLayer = () => {
    const modalName = useSelector(modalNameSelector);

    switch(modalName){
        case 'PROJECTS_MODAL':
            return  <ProjectsModal />
        case 'SAVE_PROJECTS_MODAL':
            return <SaveProjectModal />
        default:
            return null;
    }
}