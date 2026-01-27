import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface Props {
  title: string;
  status: boolean;
  toggleModal: any;
  loading: boolean;
  children: any;
  success: boolean;
}

export const FormModal = (props: Props) => {
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
      }, 3000);
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
          <div className="fixed inset-0 bg-[#1e2939a8] bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end sm:justify-center sm:p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full transform overflow-hidden rounded-tr-[25px] rounded-tl-[25px] sm:rounded-lg text-left shadow-xl transition-all my-0 sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-[#373f4f] relative  px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  {isLoading && (
                    <div className="absolute top-0 left-0 bg-[#ffffffde] w-full h-full flex items-center justify-center z-10">
                      <div
                        className={`circle-loader ${
                          isSuccess && "load-complete"
                        }`}
                      >
                        <div
                          className={`${isSuccess && "checkmark"} draw`}
                        ></div>
                      </div>
                    </div>
                  )}
                  <div className=" ">
                    <div className="mt-3 text-center  sm:mt-0 ">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        {props.title}
                      </Dialog.Title>
                      <div className="mt-2 ">{props.children}</div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
