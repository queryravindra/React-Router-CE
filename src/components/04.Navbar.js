// import { Link } from "react-router-dom"

// export const Navbar = () => {
//   return (
//     <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//     </nav>
//   )
// }


// 5.Active Links
import { NavLink } from "react-router-dom"
import { useAuth } from "./15.1.Auth"

export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
        fontWeight: isActive ? 'bold' : 'normal',
        textDecoration: isActive ? 'none' : 'underline',
    }
  }

  const auth = useAuth()

  return (
    <nav className="primary-nav">
        <NavLink style={navLinkStyles} to="/">Home</NavLink>
        <NavLink style={navLinkStyles} to="/about">About</NavLink>
        <NavLink style={navLinkStyles} to="/products">Products</NavLink>
        {/* 15.Authentication and Protected Routes */}
        <NavLink style={navLinkStyles} to="/profile">Profile</NavLink>
        {
          !auth.user && (
            <NavLink style={navLinkStyles} to="/login">Login</NavLink>
          )
        }
    </nav>
  )
}

//What is special about this NavLink component though is that by default it receives an active class when the link is the

// Why would i use Link component that we have seen earlier, instead of the NavLink compoennt
// Well the NavLink component is specifically meant for building components like Navbar or Breadcrumbs or set of tabs
// where you have to highlight the current selected item which provide useful context to the screen readers

// use Link compoent when you want to access external pages



