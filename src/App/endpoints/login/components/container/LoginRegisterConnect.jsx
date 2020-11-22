import { connect } from 'react-redux';
import { LoginRegister } from './../presentational/LoginRegister.jsx';

const mapStateToProps = state => ( {
    searchTerm: state.splash.search,
} )


export default connect( mapStateToProps, null )( LoginRegister );