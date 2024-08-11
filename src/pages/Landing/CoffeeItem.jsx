import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import style from './landing.module.scss';

function CoffeeItem({ coffee }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [pricingMultiplier, setPricingMultiplier] = useState(1)

  const cofePrace = [{ size: 'S', count: '1s', multiplier: 1 }, { size: 'M', count: '2s', multiplier: 1.5 }, { size: 'L', count: '3s', multiplier: 2 }, { size: 'XL', count: '4s', multiplier: 2.5 }]
  

  const handleOrderClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const changeOfTheMultiplier = (multiplier) => {
    setPricingMultiplier(multiplier)
  }


  return (
    <div className={style.item}>
      <div>
        <img src={coffee.img} alt="coffee" />
      </div>
      <div className={style.itemInfo}>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
        <p>{coffee.price}</p>
        <button className={style.button} onClick={handleOrderClick}>Order Now</button>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>{coffee.title}</h2>
        <p>{coffee.description}</p>

        <div className={style.itemsSize}>
          {cofePrace.map(el => (
            <button className={style.count_button} onClick={() => changeOfTheMultiplier(el.multiplier)}>
              <p className={style.size}>{el.size}</p>
              <p className={style.count}>{el.count}</p>
            </button>
          ))}
        </div>

        <p>Total price: {`$${+coffee.price.slice(1) * pricingMultiplier}`}</p>
        <button className={style.button}>Confirm Order</button>
      </Modal>
    </div>
  );
}

export default CoffeeItem;
