import React, {useState} from 'react';
import {CloseOutlined} from "@ant-design/icons";

const Sags = ({cartItem , removeFromCart, untoggleModal}) => {
    const [basket, setBasket] = useState(false);
    return ( 
        <>
        {basket && (
          <div className="SagsMenu">
            <h3>{cartItem.name}</h3>
            <p>{cartItem.price}</p>
            <button onClick={() => removeFromCart(cartItem.id)}>Remove</button>
            <button className="closeBtn" onClick={untoggleModal}><CloseOutlined /></button>
          </div>
      )}
        </>
     );
}
 
export default Sags;