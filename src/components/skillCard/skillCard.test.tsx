import React from 'react';
import ReactDOM from 'react-dom';
import SkillCard from './skillCard';

it('クラッシュすることなくレンダリングができること', () => {
  const div = document.createElement('div');
  const skill = {
    Category : '',
    Skills : []
  }
  ReactDOM.render(<SkillCard skillInfo={skill} clickHandler={()=> () => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
