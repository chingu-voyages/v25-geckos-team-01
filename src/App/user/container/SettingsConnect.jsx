import { connect } from 'react-redux';
import { Settings } from '../presentational/Settings.jsx';

const mapStateToProps = state => ( {
    auth: state.auth
} )

export default connect( mapStateToProps, null )( Settings );
