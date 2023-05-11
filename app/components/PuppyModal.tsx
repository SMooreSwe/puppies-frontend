import { PuppyModalProps } from '@/types/types';
import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import PuppyForm from './PuppyForm';

const PuppyModal = (props: PuppyModalProps) => {
  const { buttonText, apiCall } = props;
  const [ show, setShow ] = useState<boolean>(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
    <button onClick={handleShow} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
      {buttonText}
    </button>
    
    <Modal show={show} 
      onHide={handleClose}
      backdrop='static'
      tabindex="-1" 
      aria-hidden="true" 
      className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className='relative w-full max-w-2xl max-h-full inset-0 m-auto mt-[10%]'>
        <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
          <Modal.Header className='flex items-center justify-between p-6 border-b rounded-t dark:border-gray-600'>
            <Modal.Title className='text-xl font-semibold text-gray-900 dark:text-white'>
              {`${buttonText} Here`}
            </Modal.Title>
            <button onClick={handleClose} className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium w-20 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'>
              Close
            </button>
          </Modal.Header>
          <Modal.Body className='p-6 space-y-6'>
            <PuppyForm apiCall={apiCall}/>
          </Modal.Body>
          <Modal.Footer className='flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'></Modal.Footer>
        </div>
      </div>
    </Modal>
    </>
  )
}

export default PuppyModal