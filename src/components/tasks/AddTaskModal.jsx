import React from 'react';
import Modal from '../ui/Modal';

const AddTaskModal = ({isOpen, setIsOpen}) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} Title={'Programming Hero'}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse totam commodi doloribus nisi qui accusantium!</p>
        </Modal>
    );
};

export default AddTaskModal;