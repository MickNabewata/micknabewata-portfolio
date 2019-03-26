import React from 'react';
import ReactDOM from 'react-dom';
import SampleContent2 from './sampleContent2';

it('クラッシュすることなくレンダリングができること', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SampleContent2 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
