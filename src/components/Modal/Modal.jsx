import  { useEffect } from "react";
import css from './Modal.module.css'


const Modal = (onClose, url) => {

  // componentDidMount() {
  //   window.addEventListener('keydown', this.handelKeyDown)
  // }
  
  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handelKeyDown)
  // }
  const handelKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose()
    
  }
  }
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