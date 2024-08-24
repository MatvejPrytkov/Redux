import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clear, generateBasketItems, addQuantity, removeQuantity, addItemToBasket } from "../basketSlice/basketSlice";
import './Basket.css'
export function Basket(){
    const items = useSelector(state => state.basket.items )
    const dispatch = useDispatch()

    const basketItems = items.map((item, index) =>{
        return <div className="Basket-item" key={item.uuid}>
            <div>{index+1}</div>
            <div>{item.title}</div>
            <div>{item.price}</div>
            <button data-uid = {item.uuid} onClick={ev=>dispatch(removeQuantity(ev.target.getAttribute('data-uid')))}>-</button>
            <div>{item.quantity}</div>
            <button data-uid = {item.uuid} onClick={ev=>dispatch(addQuantity(ev.target.getAttribute('data-uid')))}>+</button>
            <div>{item.price*item.quantity}руб.</div>

        </div>
    })

    return (
        <div className="Basket">
            <button onClick={()=>{dispatch(clear())}}>Очистить корзину</button>
            <button onClick={()=>{dispatch(generateBasketItems())}}>Создать товар</button>
            <button onClick={()=>{dispatch(addItemToBasket({
                uuid:'c26af5e3-982f-4f47-ae48-2b63179278ff',
                title: 'Книга N',
                price:2000,
                quantity:19
            }))}}>Добавить товар</button>
            

        
        {basketItems}
        <div>Итого: <strong>{items.reduce((curr, next)=> curr +next.price*next.quantity, 0)}</strong></div>
        
        </div>
    )
}