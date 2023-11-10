import { PropsWithChildren } from 'react'
import BootstrapButton from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

type Props = {
    variant: 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-danger' | 'outline-warning' | 'outline-info' | 'outline-dark' | 'outline-light' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'link'
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    size?: 'sm' | 'lg'
    loading?: boolean
    type?: 'button' | 'reset' | 'submit' | undefined
    title?: string
    disabled?: boolean
} & Partial<{ className: string }>

function Button({ children, onClick, loading, disabled, className, variant = 'primary', size = 'sm', title, type = undefined }: PropsWithChildren<Props>) {
    return <OverlayTrigger offset={[0, 10]} overlay={<Tooltip id={title} className='position-fixed'>{title}</Tooltip>} trigger={['hover', 'focus']}>
        <BootstrapButton
            type={type}
            variant={variant}
            disabled={loading || disabled}
            active={loading}
            size={size}
            className={className}
            onClick={(e) => {
                e.stopPropagation()
                // e.preventDefault()
                onClick?.(e)
            }}
        >
            {loading ? <Spinner animation="border" size='sm' /> : children}
        </BootstrapButton>
    </OverlayTrigger>
}

export default Button