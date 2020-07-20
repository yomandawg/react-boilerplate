import React from 'react';
import { useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import history from '../history';

const Chat = props => {
  const user = useSelector(state => state.auth);

  return ReactDOM.createPortal(
    <div
      onClick={() => history.push('/')}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{user.isSignedIn ? 'yoman' : 'login plz'}</div>
        <div className="content">Content</div>
        <div className="actions">
          <button className="ui button primary">Button1</button>
          <button className="ui button">Button2</button>
        </div>
      </div>
    </div>,
    document.getElementById('chat')
  );
};

export default Chat;