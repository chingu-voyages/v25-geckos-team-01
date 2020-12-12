import { connect } from 'react-redux';
import { NewTask } from '../presentational/NewTask.jsx';
import { addNewTask } from './../../../actions/tasksActions';

const mapStateToProps = state => ( {
    auth: state.auth
} )

const mapDispatchToProps = {
    addNewTask,
}

export default connect( mapStateToProps, mapDispatchToProps )( NewTask );
