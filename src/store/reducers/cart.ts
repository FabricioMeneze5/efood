import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartSlice = {
  items: MenuItem[]
  isOpen: boolean
  idOrder: string
}

const initialState: CartSlice = {
  items: [],
  isOpen: false,
  idOrder: ''
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
    },
    setIdOrder: (state, action: PayloadAction<string>) => {
      state.idOrder = action.payload
    },
    clear: (state) => {
      state.items = []
      state.idOrder = ''
    }
  }
})

export const { add, open, close, remove, clear, setIdOrder } = cartSlice.actions
export default cartSlice.reducer
