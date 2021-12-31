import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import Update from './Update'

export default function UpdateModal({ showModal, setShowModal, setReload,updateId,data}) {

    let selectedRow = data.filter((item) => item.id === updateId)
   
    
   
  return (
    <>
      <div className="modals">
        <Transition appear show={showModal} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={() => setShowModal(false)}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Selected Product
                  </Dialog.Title>
                  <div className="mt-2 mx-auto">
                    <Update
                    selectedRow={selectedRow}
                      dataReload={setReload}
                      submitTitle="Update Product"
                      setShowModal={setShowModal}
                    />
                   <div className='text-right'>
                   <button
                      type="button"
                      className="button_primary"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                   </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  )
}
