import React from 'react';
import Modal from '../ui/Modal';
import { useForm } from 'react-hook-form';

const AddTaskModal = ({ isOpen, setIsOpen }) => {

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    const onCancel =() =>{
        reset()
        setIsOpen(false)
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} Title={'Programming Hero'}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='flex flex-col mb-5'>
                    <label htmlFor="title mb-3">Title</label>
                    <input className='w-full rounded-md' type="text" id='title' {...register('name')} />
                </div>
                <div className='flex flex-col mb-5'>
                    <label htmlFor="description mb-3">Description</label>
                    <input className='w-full rounded-md' type="text" id='Description' {...register('name')} />
                </div>
                <div className='flex flex-col mb-5'>
                    <label htmlFor="title mb-3">Dead line</label>
                    <input className='w-full rounded-md' type="date" id='date' {...register('date')} />
                </div>
                <div className='flex flex-col mb-5'>
                    <label htmlFor="title mb-3">Assigned to</label>
                    <select className='w-full rounded-md' id='assignedTo' {...register('assignedTo')}
                    >
                        <option value={'Himaloy Ashis'} >Himaloy Ashis</option>
                        <option value={'Hriday '} >Hriday </option>
                        <option value={'Niladri'} >Niladri</option>
                        <option value={'Durga De'} >Durga De</option>
                        <option value={'Aroti Rani'} >Aroti Rani</option>
                        <option value={'Anusry'} >Anusry</option>
                        <option value={'Bithy'} >Bithy</option>
                        <option value={'Pinky'} >Pinky</option>
                        <option value={'Namyeem'} >Namyeem</option>
                        <option value={'Biswajit'} >Biswajit</option>

                    </select>
                </div>
                <div className='flex flex-col mb-5'>
                    <label htmlFor="title mb-3">Priority</label>
                    <select className='w-full rounded-md' id='priority' {...register('priority')}
                    >
                        <option defaultValue value={'High'} >High</option>
                        <option value={'medium'} >Medium </option>
                        <option value={'low'} >Low</option>
                    </select>
                </div>
                <div className=' flex justify-end gap-3'>
                    <button onClick={()=> onCancel()} className='btn btn-primary' type='button'>Cancel </button>
                    <button className='btn btn-danger' type='submit'>Submit </button>
                </div>

            </form>
        </Modal>
    );
};

export default AddTaskModal;