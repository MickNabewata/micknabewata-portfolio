import React from 'react';
import ReactDOM from 'react-dom';
import SampleContent1 from './sampleContent1';

it('クラッシュすることなくレンダリングができること', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SampleContent1 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
