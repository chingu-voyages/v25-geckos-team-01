import { connect } from 'react-redux';
import { Tasks } from '../presentational/Tasks.jsx';
import { setSearch } from './../../../actions/tasksActions';

const mapStateToProps = state => ( {
    tasks: state.tasks.tasksList,
    search: state.tasks.search,
} )

const mapDispatchToProps = {
  setSearch,
}

export default connect( mapStateToProps, mapDispatchToProps )( Tasks );
