import { Component } from "react";
import css from './Modal.module.css'


class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handelKeyDown)
  }
  
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handelKeyDown)
  }
  handelKeyDown = (e) => {
      if (e.code === 'Escape') {
        this.props.onClose()
    
  }
  }
  handelOverlay = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose()
    }
  }

  render() {
    return <div className={css.Overlay} onClick={this.handelOverlay}>
  <div className={css.Modal}>
    <img src={this.props.url} alt="" />
  </div>
</div>
}
}

export default Modal;