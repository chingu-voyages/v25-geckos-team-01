import { connect } from 'react-redux';
import { AuthContent } from '../presentational/AuthContent.jsx';
import { register, login, resetError } from './../../../actions/authActions';

const mapStateToProps = state => ( {
    auth: state.auth
} )

const mapDispatchToProps = {
  register,
  login,
  resetError,
}

export default connect( mapStateToProps, mapDispatchToProps )( AuthContent );
