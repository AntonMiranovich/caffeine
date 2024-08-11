import style from './header.module.scss';
import { Link } from 'react-router-dom';
import Options from './Options';

const options = [
  { id: 1, label: 'Home', position: 800 },
  { id: 2, label: 'Menu', position: 1450 },
  { id: 3, label: 'About Us', position: 2120 },
  { id: 4, label: 'Contact Us', position: 5000 },
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
