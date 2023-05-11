import React, { useState } from 'react'
import Image from 'next/image'
import Modal from 'react-bootstrap/esm/Modal';
import { DeleteButtonProps } from '@/types/types';
import { deleteOne } from '../utils/fetchCalls';

const DeleteButton = ({ puppyID, listSetter }: DeleteButtonProps) => {
    const [ show, setShow ] = useState<boolean>(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleDelete = () => {
        deleteOne(puppyID)
        listSetter(puppyID)
        handleClose()
    }

    return (
        <>
        <button onClick={handleShow} className='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2'>
            Delete Puppy
        </button>
        
        <Modal show={show} 
      onHide={handleClose}
      backdrop='static'
      tabindex="-1" 
      aria-hidden="true" 
      className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className='relative w-full max-w-2xl max-h-full inset-0 m-auto mt-[20%]'>
        <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
          <Modal.Body className='flex flex-col items-center p-6 space-y-6'>
            <h2 className='text-2xl text-red-500 flex gap-2'>
                <Image src={'/warning.png.png'} alt='warning sign' width={30} height={30}></Image>
                WARNING!
                <Image src={'/warning.png.png'} alt='warning sign' width={30} height={30}></Image>
            </h2>
            <p className='text-base leading-relaxed text-gray-500 dark:text-white'>
                Are you sure you want to delete this puppy? This cannot be reversed!
            </p>
          </Modal.Body>
          <Modal.Footer className='flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'>
            <button onClick={handleDelete} className='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2'>
                Yes, delete
            </button>
            <button onClick={handleClose} className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'>
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