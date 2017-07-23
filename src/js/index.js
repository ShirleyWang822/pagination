import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import ListingPage from './components/ListingPage';

render(
	<Router history={browserHistory}>
	    <Route path="/" component={ListingPage}>
	      
	    </Route>
  	</Router>,
  document.getElementById('react-root')
);
