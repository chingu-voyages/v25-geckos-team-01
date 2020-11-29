import { connect } from 'react-redux';
import { Tasks } from '../presentational/Tasks.jsx';

const mapStateToProps = state => ( {
    auth: state.auth
} )

export default connect( mapStateToProps, null )( Tasks );
