import React, { useContext } from 'react';
// import icons
import {
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
  ImLinkedin2,
  ImVideoCamera
} from 'react-icons/im';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className='hidden xl:flex ml-24'
    >
      <ul className='flex gap-x-4'>
        {/* <li>
          <a href='http://wwww.facebook.com' target='_blank'>
            <ImFacebook />
          </a>
        </li> */}
        <li>
          <a href='https://x.com/visualcraftsman' target='_blank'>
            <ImTwitter />
          </a>
        </li>
        {/* <li>
          <a href='https://www.pinterest.com/saiedash/' target='_blank'>
            <ImPinterest />
          </a>
        </li> */}
        <li>
          <a href='https://www.instagram.com/visualcraftsman/' target='_blank'>
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/saied-ashour-45767bb1/' target='_blank'>
          <ImLinkedin2/>
          </a>
        </li>
        <li>
          <a href='https://www.youtube.com/saiedash' target='_blank'>
            <ImYoutube />
          </a>
        </li>
        <li>
          <a href='https://vero.co/visualcraftsman' target='_blank'>
            <ImVideoCamera />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
