import React, {useState , useEffect} from "react";
import {ShoppingCartOutlined, CloseOutlined} from "@ant-design/icons";
import Popup from "./components/Popup";
import Baraa from "./components/Baraa";
import Sags from "./components/Sags";

const AllOne = () => {
  const [items, setSectn] = useState([]);
    const Ap = async () => {
        const i = await fetch("https://fakestoreapi.com/products");
        const a = await i.json();
        console.log(a);
        setSectn(a);
      };
  useEffect(() =>{
    Ap()
},[]);
//Props to Popup
const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };
//Sags haruulna
  const [basket, setBasket] = useState(false);

  const toggleModal = () => {
    setBasket(!basket);
    document.getElementById('main').style.display='none';
  };
  const untoggleModal = () => {
    setBasket(!basket);
    document.getElementById('main').style.display='flex';
  };

  const [prod, setProd] = useState([]);
  const handleAddCart = (item) => {
    setProd([...prod,item])
  };
  console.log({prod});

  const removeCartItem = (itemId) => {
    const updatedCart = prod.filter(item => item.id !== itemId);
    setProd(updatedCart);
  };
return (
<div>
      {basket && (
        <div id="SagsMenu">
           {prod.map(prod =>
          <div className="Product">
            <img src={prod.image} alt="img"/>
            <h3>{prod.title}</h3>
            <p>{prod.price}$</p>
            <button onClick={() => {removeCartItem(prod.id)}}>remove</button>
          </div>
           )}
        <button className="closeBtn" onClick={untoggleModal}><CloseOutlined /></button>
      </div>
      )}
      
    <div id="main">
        <div className="header">
          <li><a>Logo</a></li>
          <button className="Sags" onClick={toggleModal} ><ShoppingCartOutlined />Сагс</button>
        </div>
        <div className="mai">
         {selectedItem && (
            <Popup item={selectedItem} onClose={handleClosePopup} OnItemClick={handleAddCart}/>
         )}
        </div>
        <div className="nii">
          {items.map((item) => (
          <Baraa key={item.id} item={item} onItemClick={handleItemClick} itm={selectedItem} OnItemClick={handleAddCart} />
          ))}
        </div>
      </div>
  </div>
  );
}
 
export default AllOne;