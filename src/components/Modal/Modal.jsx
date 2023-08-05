import  { useEffect } from "react";
import css from './Modal.module.css'


const Modal = ({onClose, url}) => {

  useEffect(() => {
    const handelKeyDown = (e) => {
    if (e.code === 'Escape') {
          onClose()
  }
    }
   window.addEventListener('keydown', handelKeyDown)

    return () => {
      window.removeEventListener('keydown', handelKeyDown)
    };
  },[onClose]);
  const handelOverlay = e => {
    if (e.currentTarget === e.target) {
     onClose()
    }
  }


    return <div className={css.Overlay} onClick={handelOverlay}>
  <div className={css.Modal}>
    <img src={url} alt="" />
  </div>
</div>
}

export default Modal;