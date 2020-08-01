import React from 'react';
import '../style/App.scss';
import bg from '../img/1.png';
import mv1 from '../img/2.png';
import mv2 from '../img/3.png';
import logo from '../img/4.png';
import shv from '../img/5.png';
import pine from '../img/6.png';
import fla from '../img/7.png';
import Us from './Us';

const Start = () => {
  return (
    <div>
      <div className="parallax">
    <div className="parallax__layer parallax__layer__0">
        <img src={bg} />
    </div>
    <div className="parallax__layer parallax__layer__1">
        <img src={logo}/>
    </div>
    <div className="parallax__layer parallax__layer__2">
        <img src={mv2} />
    </div>
    <div className="parallax__layer parallax__layer__3">
        <img src={mv1} />
    </div>
    <div className="parallax__layer parallax__layer__4">
        <img src={pine} />
    </div>
    <div className="parallax__layer parallax__layer__5">
        <img src={shv} />
    </div>
    {/* <div className="parallax__layer parallax__layer__6">
        <img src={fla} />
    </div> */}
    <div className="parallax__cover"><Us/></div>
</div>
    </div>
  );
}

export default Start;
