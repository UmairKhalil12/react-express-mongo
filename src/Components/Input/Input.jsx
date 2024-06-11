import React from 'react'

export default function Input({ type, label, onChange, value, }) {
    return (
        <div>
            <label className='addtask-label'>{label}</label>
            <input
                className='addtask-input'
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
