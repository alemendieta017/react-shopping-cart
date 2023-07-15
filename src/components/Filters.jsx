import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

const Filters = () => {
  const { setFilters, filters } = useFilters()

  const filterMinPriceId = useId()
  const filterCategoryId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({ ...prevState, minPrice: event.target.value }))
  }

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({ ...prevState, category: event.target.value }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={filterMinPriceId}></label>
        <input
          type="range"
          id={filterMinPriceId}
          min={0}
          max={1000}
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>{filters.minPrice}$</span>
      </div>
      <div>
        <label htmlFor={filterCategoryId}></label>
        <select
          name="category"
          id={filterCategoryId}
          onChange={handleChangeCategory}
          value={filters.category}
        >
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
