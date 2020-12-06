import { connect } from 'react-redux';
import { SplashPage } from './../presentational/SplashPage.jsx';

const mapStateToProps = state => ( {
    tasks: state.tasks,
} )

export default connect( mapStateToProps, null )( SplashPage );