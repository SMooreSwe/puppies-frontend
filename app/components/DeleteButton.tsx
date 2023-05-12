import React, { useState } from 'react'
import Image from 'next/image'
import Modal from 'react-bootstrap/esm/Modal';
import { DeleteButtonProps } from '@/types/types';
import { deleteOne } from '../utils/fetchCalls';

const DeleteButton = ({ puppyID, deleteSetter }: DeleteButtonProps) => {
    const [ show, setShow ] = useState<boolean>(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleDelete = () => {
        deleteOne(puppyID)
        deleteSetter(puppyID)
        handleClose()
    }

    return (
        <>
        <button onClick={handleShow} className='text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2'>
            Delete Puppy
        </button>
        
        <Modal show={show} 
      onHide={handleClose}
      backdrop='static'
      tabindex="-1" 
      aria-hidden="true" 
      className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className='relative w-full max-w-2xl max-h-full inset-0 m-auto mt-[20%]'>
        <div className='relative bg-blue-500 rounded-lg shadow-lg'>
          <Modal.Body className='flex flex-col items-center p-6 space-y-6'>
            <h2 className='text-2xl text-red-500 font-bold flex gap-2'>
                <Image src='/warning.png' alt='warning sign' width={30} height={29}></Image>
                WARNING!
                <Image src='/warning.png' alt='warning sign' width={30} height={29}></Image>
            </h2>
            <p className='text-base leading-relaxed text-white'>
                Are you sure you want to delete this puppy? This cannot be reversed!
            </p>
          </Modal.Body>
          <Modal.Footer className='flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'>
            <button onClick={handleDelete} className='text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2'>
                Yes, delete
            </button>
            <button onClick={handleClose} className='text-white hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10'>
                No, Go Back
            </button>
          </Modal.Footer>
        </div>
        </div>
        </Modal>
        </>
    )
}

export default DeleteButton