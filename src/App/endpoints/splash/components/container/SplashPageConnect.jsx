import { connect } from 'react-redux';
import { SplashPage } from './../presentational/SplashPage.jsx';
import { setSearch } from './../../actions/index.js';

const mapStateToProps = state => ( {
    searchTerm: state.splash.search,
} )

const mapDispatchToProps = dispatch => {
  return {
    setSearch: searchTerm => dispatch( setSearch( searchTerm ) ),
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( SplashPage );