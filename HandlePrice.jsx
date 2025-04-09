import React, { useState } from 'react'

const HandlePrice = () => {
  const [price, setPrice] = useState(0);
  const [selectedItems, setSelectedItems] = useState({});

  const handlePriceChange = (item, itemPrice) => {
    setSelectedItems((prev) => {
      const isChecked = !prev[item]; // toggle
      const newTotal = isChecked
        ? price + itemPrice
        : price - itemPrice;

      setPrice(newTotal);

      return {
        ...prev,
        [item]: isChecked
      };
    });
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={() => handlePriceChange('home', 50)}
          checked={selectedItems['home'] || false}
        />
        Home (50$)
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          onChange={() => handlePriceChange('nav', 100)}
          checked={selectedItems['nav'] || false}
        />
        Nav (100$)
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          onChange={() => handlePriceChange('footer', 100)}
          checked={selectedItems['footer'] || false}
        />
        Footer (100$)
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          onChange={() => handlePriceChange('hero', 80)}
          checked={selectedItems['hero'] || false}
        />
        Hero (80$)
      </label>
      <br />

      <p>Total Price: ${price}</p>
    </div>
  );
};

export default HandlePrice;
