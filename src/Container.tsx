import React, { useEffect, useRef, ReactNode } from 'react'
import { createSwapy } from 'swapy'

interface ContainerProps {
    children: ReactNode,
    className?: string,
    enable?: boolean,
    onSwap?: () => void,
    config?: object,
}

const Container: React.FC<ContainerProps> = ({ enable = true, onSwap = () => { }, config = undefined, children, ...rest }) => {
    const swapy = useRef<SwapyApi>()

    useEffect(() => {
        swapy.current = createSwapy(document.querySelector('#react-swapy'), config)
        swapy.current?.enable(enable)
        swapy.current?.onSwap(onSwap)
    }, [])

    useEffect(() => {
        swapy.current?.enable(enable)
    }, [enable])

    useEffect(() => {
        swapy.current?.onSwap(onSwap)
    }, [onSwap])

    return (<div id='react-swapy' {...rest}>
        {children}
    </div>)
}

export default Container