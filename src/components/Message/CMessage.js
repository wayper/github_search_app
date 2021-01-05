import Message from './Message';
import { connect } from 'react-redux';
import { killMessage } from '../../actions';

const mapStateToProps = ({ message }) => ({
  text: message.text,
  messageType: message.messageType,
});

const mapDispatchToProps = (dispatch) => ({
  killMessage: () => dispatch(killMessage()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message);
