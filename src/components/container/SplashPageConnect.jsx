import { connect } from 'react-redux';
import { SplashPage } from './../presentational/SplashPage.jsx';

const mapStateToProps = state => ( {
    splash: state.test,
} )

export default connect( mapStateToProps, null )( SplashPage );