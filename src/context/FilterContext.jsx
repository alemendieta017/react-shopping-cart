import { useState, createContext } from 'react'

const initialState = { category: 'all', minPrice: 567 }

export const FilterContext = createContext()

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState(initialState)

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  )
}
