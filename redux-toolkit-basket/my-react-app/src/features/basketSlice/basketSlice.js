import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    items:[
        {
        uuid:'652b2357-d276-49f6-a786-ce1771a9e0bd',
        title:'Книга1',
        price:1000,
        quantity: 1
    
    },
    {
        uuid:'zdszzhn2357-d276-49f6-a786-ce1771a9e0bd',
        title:'Книга2',
        price:400,
        quantity: 6
    
    }
]
}

export const basketSlice = createSlice({
    name:'basket',
    initialState,
    reducers:{
        clear:(state)=>{
            state.items = []

        },
generateBasketItems :(state)=>{
    state.items = [
        {
            "uuid": "b1f94a46-928f-4d74-b5b9-1ec5378e2868",
            "title": "Война и мир",
            "price": 500,
            "quantity": 20
        },
        {
            "uuid": "d2a7b8ad-d95a-4c67-8bb4-6ffdbd8058be",
            "title": "Преступление и наказание",
            "price": 400,
            "quantity": 15
        },
        {
            "uuid": "045c1c72-0af5-419b-9b84-0e4fb9f03fcf",
            "title": "Анна Каренина",
            "price": 450,
            "quantity": 18
        },
        {
            "uuid": "8391eadb-f4d1-47a7-9c68-d9a72f8b63dc",
            "title": "Мастер и Маргарита",
            "price": 550,
            "quantity": 25
        },
        {
            "uuid": "faf0ff1e-0ee3-4e57-8d85-b72d3e6c6fb6",
            "title": "Евгений Онегин",
            "price": 300,
            "quantity": 30
        },
        {
            "uuid": "e94d9a2b-1377-4b2e-acae-f5ccb8d8b779",
            "title": "Отцы и дети",
            "price": 350,
            "quantity": 22
        },
        {
            "uuid": "8e23e3b0-0e7a-48b2-bef7-af5f944d4a7f",
            "title": "Идиот",
            "price": 420,
            "quantity": 17
        },
        {
            "uuid": "107db5ed-4d73-4b12-9299-b1f9d0cf8ea4",
            "title": "Три сестры",
            "price": 320,
            "quantity": 27
        },
        {
            "uuid": "c26af5e3-952f-4f47-ae48-2b63179278ff",
            "title": "Ревизор",
            "price": 380,
            "quantity": 14
        },
        {
            "uuid": "b29e6e88-95ed-405e-b306-29991e8b2b67",
            "title": "Мёртвые души",
            "price": 470,
            "quantity": 19
        }
    ]
},

addQuantity: (state, action)=>{
 const indexItemForChange =  state.items.findIndex(item=>item.uuid == action.payload)
 if ( typeof indexItemForChange =='number' && indexItemForChange>=0){
    state.items[indexItemForChange].quantity ++
    // state.items = state.items.slice()[indexItemForChange].quantity++
 }

},
removeQuantity: (state, action)=>{
    const indexItemForChange =  state.items.findIndex(item=>item.uuid == action.payload)
    if ( typeof indexItemForChange =='number' && state.items[indexItemForChange].quantity>0){
       state.items[indexItemForChange].quantity --
    }
},
addItemToBasket:(state, action)=>{
    // 
    const uuidNewItem = action.payload.uuid
    let indexExistItem = state.items.findIndex(item=>{return item.uuid== uuidNewItem});
    if(indexExistItem==-1){
        state.items.push(action.payload)
    } else{
        state.items[indexExistItem].quantity +=1
    }

    
},

deleteByUUID: (state, action)=>{
    const items = state.items.slice()
    state.items = items.filter(item =>item.uuid != action.payload)
}


    }
})

export const {clear, generateBasketItems, addQuantity, removeQuantity, addItemToBasket} = basketSlice.actions

export default basketSlice.reducer