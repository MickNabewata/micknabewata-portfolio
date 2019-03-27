import React from 'react';
import ReactDOM from 'react-dom';
import WorkCard from './workCard';

it('クラッシュすることなくレンダリングができること', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WorkCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
