import React from 'react';
import style from './modal.module.scss';

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    const closedModal = (event) => event.target === event.currentTarget ? onClose() : null


    return (
        <div className={style.modalOverlay} onClick={closedModal}>
            <div className={style.modalContent}>
                <button className={style.closeButton} onClick={onClose}>
                    &times;
                </button>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;
