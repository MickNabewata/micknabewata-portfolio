import React from 'react';
import ReactDOM from 'react-dom';
import WorkCard from './workCard';

it('クラッシュすることなくレンダリングができること', () => {
  const div = document.createElement('div');
  const work = {
    Name : '',
    Skill : [],
    Role : [],
    Members : 0,
    Overview : []
  };
  ReactDOM.render(
    <WorkCard 
      workInfo={work} 
      skillClickHandler={() => () => {}} 
      roleClickHandler={() => () => {}} />,
    div);
  ReactDOM.unmountComponentAtNode(div);
});
