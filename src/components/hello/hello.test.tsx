import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello';

it('クラッシュすることなくレンダリングができること', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hello />, div);
  ReactDOM.unmountComponentAtNode(div);
});
