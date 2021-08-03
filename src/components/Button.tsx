import * as React from 'react'
import classNames from 'classnames'

type PropTypes = {
    className?: string,
    outline?: boolean,
    children?: string | number | React.ReactNode,
    onClick?: (obj: any) => void
}

export const Button: React.FC<PropTypes> = ({className, outline, children, onClick}) => {
    return (
        <button onClick={onClick}
                className={classNames('button', className, {
                'button--outline': outline}
        )}>{children}</button>
    )
}