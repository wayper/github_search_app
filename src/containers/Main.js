import VMain from '../components/Main/VMain';
import { connect } from 'react-redux';
import {
  fetchLocalData,
} from '../actions';

const mapStateToProps = ({ fetching: { status }, localData, message }) => {
  const isLoading = status == 'loading';

  return ({
    isLoading,
    localData,
    message,
  });
};
const mapDispatchToProps = (dispatch) => ({
  fetchLocalData: ({ url }) => dispatch(fetchLocalData({ url })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VMain);
