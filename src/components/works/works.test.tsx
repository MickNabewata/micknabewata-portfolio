import React from 'react';
import ReactDOM from 'react-dom';
import Works from './works';

it('クラッシュすることなくレンダリングができること', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Works />, div);
  ReactDOM.unmountComponentAtNode(div);
});
