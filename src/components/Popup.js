import React from 'react';
import {CloseOutlined} from "@ant-design/icons";

const Popup = ({ item, onClose, OnItemClick}) => {
  return (
    <div className="popup1">
      <div className="popup">
        <div className="n">
          <img src={item.image} alt='img' />
        </div>
        <li></li>
        <div className="m">
          <p>Үнэ</p>
          <h4>{item.price}$</h4>
          {item.description} <br />
          <button onClick={() => OnItemClick(item)}>Sagsand Hiih</button>
        </div>
        <button className="close-btn" onClick={onClose}><CloseOutlined /></button>
      </div>
    </div>
  );
};

export default Popup;