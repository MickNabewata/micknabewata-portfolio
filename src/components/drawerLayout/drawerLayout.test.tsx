import React from 'react';
import ReactDOM from 'react-dom';
import DrawerLayout, { Links } from './drawerLayout';

it('クラッシュすることなくレンダリングができること', () => {
  const div = document.createElement('div');
  const contents : JSX.Element = <div />;
  const links : Links[] = [];
  ReactDOM.render(<DrawerLayout contents={contents} links={links} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
