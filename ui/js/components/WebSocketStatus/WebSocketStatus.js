import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class WebSocketStatus extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>WebSocket status: <strong>
        {this.props.websocket.get('state')}
        {" "}
        {this.props.websocket.get('messages').count()}
      </strong></div>
    )
  }
}

export default connect( state => {
  return { websocket: state.get('websockets').get('poller') }
} ) (WebSocketStatus)