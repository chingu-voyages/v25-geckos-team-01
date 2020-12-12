import { connect } from 'react-redux';
import { Task } from '../presentational/Task.jsx';
import { setCurrentTask } from './../../actions/tasksActions';

const mapStateToProps = state => ( {
    auth: state.auth
} )

const mapDispatchToProps = {
  setCurrentTask,
}

export default connect( mapStateToProps, mapDispatchToProps )( Task );
