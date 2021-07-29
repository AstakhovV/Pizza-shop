import React from 'react'
import classNames from 'classnames'

export const Button = ({className, outline, children}) => {
    return (
        <button  className={classNames('button', className, {
                'button--outline': outline
            }
        )}>{children}</button>
    )
}