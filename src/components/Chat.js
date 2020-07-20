import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Chat = props => {
  useEffect(() => {

  }, []);

  return ReactDOM.createPortal(
    <div
      onClick={() => history.push('/')}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">header</div>
        <div className="content">content</div>
        <div className="actions">actions</div>
      </div>
    </div>,
    document.getElementById('chat')
  );
};

export default Chat;