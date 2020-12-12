import { connect } from 'react-redux';
import { Auth } from '../presentational/Auth.jsx';
import { resetError } from './../../../actions/authActions';

const mapStateToProps = state => ( {
    auth: state.auth
} )

const mapDispatchToProps = {
  resetError,
}

export default connect( mapStateToProps, mapDispatchToProps )( Auth );
