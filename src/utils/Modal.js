import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

class ModalPopup extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default ModalPopup;