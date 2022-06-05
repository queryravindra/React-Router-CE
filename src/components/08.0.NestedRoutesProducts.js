// Nested Routes
import { Link, Outlet } from 'react-router-dom'

export const NestedRoutesProducts = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search Products" />
      </div>
      <nav>
        <Link to="featured">Featured</Link>
        <Link to='new'>new</Link>
        {/* <Link to="/products/featured">Featured</Link>
        <Link to='/products/new'>new</Link> */}
      </nav>
      <Outlet />
    </>
  )
}

// A Relative Link is a link that does not start with forward slash('/') and will inherit the closest route in which they are rendered
// but incase of absolute links if we place ('/') then they will construct from the root of the app and not the current URL
/**
 * the links are breaking if we place '/new' and '/featured' to make this work with absolute links we need to add
 * '/products/featured' and '/products/new'
 */

// NavLinks ofcourse still valid to make more sense for primary navigation bar