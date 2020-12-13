import { connect } from 'react-redux';
import { UserDashboard } from '../presentational/UserDashboard.jsx';

const mapStateToProps = state => ( {
    auth: state.auth,
    tasks: state.tasks.tasksList,
} )

export default connect( mapStateToProps, null )( UserDashboard );
