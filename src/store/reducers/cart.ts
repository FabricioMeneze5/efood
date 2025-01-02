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
      const food = state.items.find((item) => item.id === action.payload.id)

      if (!food) {
        state.items.push(action.payload)
      } else {
        alert('Prato já adicionado ao carrinho!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
