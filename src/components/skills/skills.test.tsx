import React from 'react';
import ReactDOM from 'react-dom';
import Skills from './skills';

it('クラッシュすることなくレンダリングができること', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Skills />, div);
  ReactDOM.unmountComponentAtNode(div);
});
