import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Working Setup!';

ReactDOM.render(
	<div>{title}</div>,
	document.getElementById('app-react')
);

module.hot.accept();