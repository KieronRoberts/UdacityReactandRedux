import React from 'react'
import './ErrorPopup.css'

function ErrorPopup(props) {
  return (props.trigger) ? (
    <div className='Popup'>
      <div className='PopupInner'>
        <button className='CloseButton' onClick={() => props.setTrigger(false)}>
          &#10060;
        </button>
          {props.children}
      </div>
    </div>
  ) : "";
}

export default ErrorPopup
