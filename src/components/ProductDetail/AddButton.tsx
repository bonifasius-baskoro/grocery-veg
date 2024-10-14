import React, { FC } from 'react'

interface addButtonProps {
    
}
const AddButton:FC = () => {
  return (
    <div>
        <div className='flex'>
            <button>-</button>
            <div>

            </div>
            <button>+</button>
        </div>
    </div>
  )
}

export default AddButton