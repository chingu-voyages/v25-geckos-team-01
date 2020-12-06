import { connect } from 'react-redux';
import { TasksContainer } from './../presentational/TasksContainer.jsx';

const mapStateToProps = state => ( {
    tasks: state.tasks.tasksList,
} )

export default connect( mapStateToProps, null )( TasksContainer );