import React, { useContext } from 'react'
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';

const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'> Delivery Imformation</p>
        <div className="multi-filds">

          <input type="text" placeholder='First  Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Adress' />
        <input type="text" placeholder='Street' />
        <div className="multi-filds">

          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-filds">

        <input type="text" placeholder='Zip code' />
        <input type="text"  placeholder='Country'/>
    </div>
    <input type="text" placeholder='phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
                  <p>SubTotal</p>
                  <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount()+2}</p>
            </div>
          </div>
            <button >PROCEED TO PAYMENT</button>
        </div>
      </div>

    </form>
  )
}


export default PlaceOrder