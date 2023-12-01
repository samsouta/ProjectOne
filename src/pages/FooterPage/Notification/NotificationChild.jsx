import React, { useState } from 'react'


const NotificationChild = (props) => {
    const { url} = props

    return (
        <div>
            <div>
                <img src={url} alt="" />
            </div>
        </div>
    )
}

export default NotificationChild
