import { useState } from 'react'
import { Modal } from './components/modal'

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  
  return (
    <div className="flex flex-col w-full items-center">
      <button 
        onClick={() => setIsModalVisible(true)}
        className="py-2 px-4 bg-gray-800 rounded mx-auto"
      >Open</button>
      {isModalVisible ? <Modal /> : null}
    </div>
  )
}

export default App
