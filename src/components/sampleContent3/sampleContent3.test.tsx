import React from 'react';
import ReactDOM from 'react-dom';
import SampleContent3 from './sampleContent3';

it('クラッシュすることなくレンダリングができること', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SampleContent3 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
