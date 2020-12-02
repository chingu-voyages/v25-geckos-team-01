import { connect } from 'react-redux';
import { Tasks } from '../presentational/Tasks.jsx';
import { loadTasks } from './../../actions';
import { setSearch  } from './../../actions';

const mapStateToProps = state => ( {
    tasks: state.tasks.tasksList,
    search: state.tasks.search,
} )

const mapDispatchToProps = {
  loadTasks,
  setSearch,
}

export default connect( mapStateToProps, mapDispatchToProps )( Tasks );
