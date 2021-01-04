import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.node,
  message: PropTypes.objectOf(PropTypes.string),
  isLoading: PropTypes.bool,
  localData: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object),
    total: PropTypes.number,
  }),
  isHome: PropTypes.bool,
  fetchLocalData: PropTypes.func,
};

export const defaultProps = {
  children: '',
  message: {},
  localData: {},
  isLoading: false,
  isHome: false,
  fetchLocalData: () => {},
};
