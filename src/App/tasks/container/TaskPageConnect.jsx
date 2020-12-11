import { connect } from 'react-redux';
import { TaskPage } from '../presentational/TaskPage.jsx';

const mapStateToProps = ( state, ownProps ) => ( {
    currentTask: state.tasks.currentTask,
    tasks: state.tasks.tasksList
} )

export default connect( mapStateToProps, null )( TaskPage );
