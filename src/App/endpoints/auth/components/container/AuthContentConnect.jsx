import { connect } from 'react-redux';
import { AuthContent } from '../presentational/AuthContent.jsx';
import { register } from './../../actions';

const mapStateToProps = state => ( {
    auth: state.auth
} )

const mapDispatchToProps = {
  register,
}


export default connect( mapStateToProps, mapDispatchToProps )( AuthContent );