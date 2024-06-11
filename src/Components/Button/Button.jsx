import React from 'react'

export default function Button({ className, text, onClick }) {
    return (
        <div>
            <button className={className ? className : 'btn'} onClick={onClick} >{text}</button>
        </div>
    )
}
