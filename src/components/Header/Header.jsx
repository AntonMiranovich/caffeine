import style from './header.module.scss';
import { Link } from 'react-router-dom';
import Options from './Options';

const windowInnerWidth = window.innerWidth

const options = [
  { id: 1, label: 'Home', position: windowInnerWidth < 450 ? 420 : windowInnerWidth < 700 ? 520 : 750 },
  { id: 2, label: 'Menu', position: windowInnerWidth < 450 ? 1150 : windowInnerWidth < 700 ? 1200 : windowInnerWidth < 1200 ? 1300 : 1450 },
  { id: 3, label: 'About Us', position: windowInnerWidth < 450 ? 3380 : windowInnerWidth < 700 ? 2460 : windowInnerWidth < 1200 ? 2480 : 2100 },
  { id: 4, label: 'Contact Us', position: windowInnerWidth < 590 ? 6200 : 4700 },
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
