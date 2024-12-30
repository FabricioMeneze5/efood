import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItem } from '../../model/Restaurant'

type CartSlice = {
  items: MenuItem[]
  isOpen: boolean
}

const initialState: CartSlice = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItem>) => {
      state.items.push(action.payload)
      // const food = state.items.find((item) => item.id === action.payload.id)

      // if (!food) {
      // } else {
      //   alert('Prato já adicionado ao carrinho!')
      // }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close } = cartSlice.actions
export default cartSlice.reducer
