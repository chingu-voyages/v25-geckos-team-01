import { connect } from 'react-redux';
import { AuthContent } from '../presentational/AuthContent.jsx';
import { register, login } from './../../../actions/authActions';

const mapStateToProps = state => ( {
    auth: state.auth
} )

const mapDispatchToProps = {
  register,
  login,
}

export default connect( mapStateToProps, mapDispatchToProps )( AuthContent );
