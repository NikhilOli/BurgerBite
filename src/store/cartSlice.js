import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
    name: "foodCart",
    initialState,
    reducers: {
        add(state, action) {
            const newItem = action.payload;
            const existingItems = state.find(item => item.id === newItem.id);
            if(existingItems) {
                existingItems.qty += 1;
            }
            else {
                state.push({...newItem, qty: 1});
            }
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload);
        },
    }
})

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;