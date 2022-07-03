import { X } from "phosphor-react"

interface ModalProps {
  onClose: () => void;
}

export function Modal(props: ModalProps) {
  return (
    <div id="modal" className="absolute bottom-0 flex justify-center items-center w-full h-full p-5 bg-black bg-opacity-75">
      <div className="bg-gray-700 rounded-md max-w-2xl w-full">
        <div className="w-full flex items-center justify-between border-b border-gray-500 p-7 ">
          <strong className="text-gray-100">
            Terms of Service
          </strong>
          <button
            onClick={() => props.onClose()}
          >
            <X size={20} weight="bold" className="text-gray-400" />
          </button>
        </div>
        <div className="w-full flex items-center justify-between border-b border-gray-500 p-7">
          <p className="text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.<br />
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
          </p>
        </div>
        <div className="w-full flex items-center p-7 gap-3">
          <button className="py-3 px-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            I accept
          </button>
          <button className="py-3 px-5 text-gray-400 bg-gray-700 border border-gray-500 text-sm font-medium rounded-lg hover:text-white hover:bg-gray-600 transition-colors">
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}