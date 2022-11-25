/*eslint-disable*/
import React from 'react'
import PropTypes from 'prop-types'
import style from './style.module.scss'

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? style.modal_active : style.modal} onClick={() => setActive(false)}>
            <div className={style.modal__content} onClick={(event) => event.stopPropagation()}>

            </div>
        </div>
    )
}

Modal.propTypes = {
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired
}

export default Modal
