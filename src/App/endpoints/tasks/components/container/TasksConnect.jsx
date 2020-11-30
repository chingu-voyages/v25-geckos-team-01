import { connect } from 'react-redux';
import { Tasks } from '../presentational/Tasks.jsx';
import { loadTasks } from './../../actions';

const mapStateToProps = state => ( {
    tasks: state.tasks,
} )

const mapDispatchToProps = {
  loadTasks
}

export default connect( mapStateToProps, mapDispatchToProps )( Tasks );
