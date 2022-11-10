import React from 'react'


function Header({title, bgColor, textColor} ){
    const headerStyles = {
        backgroundColor:bgColor,
        color: textColor
    }
    return (
    <div>
        <div className='container style'>
            <h2>{title}</h2>
        </div>
    </div>
    )
}

export default Header