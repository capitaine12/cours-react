import { useEffect, useState } from 'react'
import '../style/StyleMessage.css'

import {
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaSmile,
  FaExclamationTriangle,
} from 'react-icons/fa'

const ICONS_BY_TYPE = {
  success: <FaCheckCircle />,
  error: <FaTimesCircle />,
  bon : <FaSmile/>, 
  info: <FaInfoCircle />,
  warning: <FaExclamationTriangle />,
}

export default function Message({
    show,
    className = '',
    type ,
    children,
    icon = null,
    duration = 2000,
    onClose,
}) {
    const [visible, setVisible] = useState(show)

    useEffect(() => {
        setVisible(show)
        if (show && onClose) {
            const timer = setTimeout(() => {
                onClose()
            }, duration)
            return () => clearTimeout(timer)
        }
    }, [show, duration, onClose])

    if (!visible) return null

    return (
        <div className={`custom-msg  ${type} ${className}`}>
            {icon && <span className="msg-icon">{ICONS_BY_TYPE[type]}</span>}
            <strong className='custom-txt'>{children}</strong>
        </div>
    )
}
