import style from './header.module.scss';
import { Link } from 'react-router-dom';
import Options from './Options';

const options = [
  { id: 1, label: 'Home' },
  { id: 2, label: 'Menu' },
  { id: 3, label: 'About Us' },
  { id: 4, label: 'Contact Us' },
];

function Header() {
  return (
    <div className={style.wrapper}>
      <Link to="/">
        <h1>Caffeine</h1>
      </Link>

      <div className={style.options}>
        {options.map((el, index) => (
          <Options key={index} option={el} />
        ))}
      </div>
    </div>
  );
}

export default Header;
