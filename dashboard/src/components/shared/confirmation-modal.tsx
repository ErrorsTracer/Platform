import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface Props {
  title: string;
  message: string;
  status: boolean;
  toggleModal: any;
  onConfirm: any;
  loading: boolean;
  success: boolean;
}

export const ConfirmationModal = (props: Props) => {
  const cancelButtonRef = useRef(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (props.loading) setIsLoading(true);

    if (props.success) {
      setIsSuccess(true);

      setTimeout(() => {
        props.toggleModal();
        setIsLoading(false);
      }, 2000);
    }
  }, [props.loading, props.success]);

  return (
    <Transition.Root show={props.status} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={props.toggleModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center sm:p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-tr-[25px] rounded-tl-[25px] sm:rounded-lg bg-white text-left shadow-xl transition-all my-0 sm:my-8 sm:w-full sm:max-w-lg">
                {isLoading && (
                  <div className="absolute top-0 left-0 bg-[#ffffffde] w-full h-full flex items-center justify-center z-10">
                    <div
                      className={`circle-loader ${
                        isSuccess && "load-complete"
                      }`}
                    >
                      <div className={`${isSuccess && "checkmark"} draw`}></div>
                    </div>
                  </div>
                )}
                <div className="  px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center  sm:mt-0 ">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        {props.title}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{props.message}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 flex gap-4  items-center justify-center">
                  <button
                    disabled={props.loading}
                    type="button"
                    className="inline-flex  w-[100px] justify-center rounded-md bg-primary-dark  px-3 py-2 text-sm font-semibold text-white shadow-sm     "
                    onClick={props.onConfirm}
                  >
                    <span>Confirm</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-[100px] justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mt-0 w-[100px]"
                    onClick={props.toggleModal}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
