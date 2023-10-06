import React from 'react';

import Modal from "../ui/Modal"
import { useSelector } from 'react-redux';


const TaskDetailModal = ({isOpen, setIsOpen, id}) => {

    const {tasks} = useSelector((state)=>state.taskSlice)
    
    const task = tasks.find(item=> item.id == id)

    return (
       <Modal isOpen={isOpen} setIsOpen={setIsOpen} Title={task?.title} >
        {task?.description}

       </Modal>
    );
};

export default TaskDetailModal;