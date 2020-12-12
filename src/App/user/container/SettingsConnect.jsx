import { connect } from 'react-redux';
import { Settings } from '../presentational/Settings.jsx';
import { editUser, deleteUser } from './../../../actions/authActions';

const mapStateToProps = state => ( {
    auth: state.auth
} )

const mapDispatchToProps = {
  editUser,
  deleteUser,
}

export default connect( mapStateToProps, mapDispatchToProps )( Settings );
