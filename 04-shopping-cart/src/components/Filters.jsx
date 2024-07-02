import { useContext } from 'react'
import './Filters.css'

import { FiltersContext } from '../context/filters'
export function Filters () {
  const { filters, setFilters } = useContext(FiltersContext)
  const handleChangeMinPrice = (e) => {
    setFilters({
      ...filters,
      minPrice: e.target.value
    })
  }

  const handleOptions = (e) => {
    setFilters({
      ...filters,
      category: e.target.value
    })
  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Price</label>
        <input type='range' value={filters.minPrice} id='price' min='0' max='1000' onChange={handleChangeMinPrice} />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor='category'>Categoria</label>
        <select id='category' onChange={handleOptions}>
          <option value='all'>Todas</option>
          <option value='jewelery'>Joyeria</option>
          <option value="men's clothing">Ropa de Hombre</option>
          <option value='electronics'>electronicos</option>
        </select>
      </div>
    </section>
  )
}
