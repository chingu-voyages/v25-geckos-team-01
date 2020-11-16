import { connect } from 'react-redux';
import { TasksContainer } from './../presentational/TasksContainer.jsx';

const mapStateToProps = state => ( {
    tasks: state.tasks,
    searchTerm: state.splash.search,
} )

export default connect( mapStateToProps, null )( TasksContainer );