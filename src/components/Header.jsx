import Filters from './Filters'
import { CartIcon } from './Icons'

const Header = () => {
  return (
    <>
      <h1>
        React shop <CartIcon />
      </h1>
      <Filters />
    </>
  )
}

export default Header
