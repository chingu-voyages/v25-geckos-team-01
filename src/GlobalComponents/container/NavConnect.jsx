import { connect } from 'react-redux';
import { Nav } from '../presentational/Nav.jsx';
import { logout } from './../../actions/authActions';

const mapStateToProps = state => ( {
    auth: state.auth
} )

const mapDispatchToProps = {
  logout
}

export default connect( mapStateToProps, mapDispatchToProps )( Nav );
