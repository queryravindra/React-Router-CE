import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/03.0.Home';
// import { About } from './components/03.1.About';
import { Navbar } from './components/04.Navbar';
import { NavigProg } from './components/06.NavigProg';
import { NoMatchRoute } from './components/07.NoMatchRoute';
import { NestedRoutesProducts } from './components/08.0.NestedRoutesProducts';
import { FeaturedProducts } from './components/08.1.FeaturedProducts';
import { NewProducts } from './components/08.2.NewProducts';
import { Users } from './components/10.0.Users';
import { UserDetails } from './components/10.1.UserDetails';
import { Admin } from './components/10.2.Admin';
import { SearchParams } from './components/12.SearchParams';
import { Profile } from './components/15.0.Profile';
import { AuthProvider } from './components/15.1.Auth';
import { Login } from './components/15.2.Login';
import { RequireAuth } from './components/15.3.RequireAuth';
const LazyAbout = React.lazy(() => import('./components/03.1.About'));

// function App() {
//   return (
//     <>
//       {/* 04.Links */}
//       <Navbar />
//       <Routes>
//         {/* 03.Configuring Routes */}
//           <Route path="/" element={<Home />} />
//           {/* <Route path="about" element={<About />} /> */}
//         {/* 14.Lazy Loading */}
//           <Route path="about" element={<React.Suspense fallback='Loading...'><LazyAbout /></React.Suspense>} />
//         {/* 06.Navigating programatically */}
//           <Route path="order-summary" element={<NavigProg />} />
//         {/* 08.Nested Routes */}
//           <Route path="products" element={<NestedRoutesProducts />}>
//             {/* 09.Index Route */}
//               <Route index element={<FeaturedProducts />} />
//               <Route path='featured' element={<FeaturedProducts />} />
//               <Route path='new' element={<NewProducts />} />
//           </Route>
//         {/* 10.Dynamic Routes */}
//           {/* <Route path='users' element={<Users />} /> */}
//           {/* <Route path='users/1' element={<UserDetails />} />
//           <Route path='users/2' element={<UserDetails />} />
//           <Route path='users/3' element={<UserDetails />} /> */}
//           {/* <Route path='users/:userId' element={<UserDetails />} /> */}
//           {/* <Route path='users/admin' element={<UserDetails />} /> */}
//           {/* <Route path='users/admin' element={<Admin />} /> */}
//           <Route path='users' element={<Users />}>
//             <Route path=':userId' element={<UserDetails />} />
//             <Route path='admin' element={<Admin />} />
//           </Route>
//         {/* 12.search params */}
//           {/* <Route path='users' element={<SearchParams />} /> */}
//         {/* 15.Authentication and Protected Routes */}
//           <Route path='profile' element={<Profile />} />
//         {/* 07.Nomatch Route */}
//           <Route path="*" element={<NoMatchRoute />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

// 10:
// userId could be any either string or number
// If we will give 'users/admin' the router smart enough to find admin first if it is not found then it will goto Dynamic Route 'users/:userId'
// React Router first find specific route before matching Dynamic Route
// Dynamic Routes can be nested as well



// 14.Lazy Loading:
// lazy() is a function that takes another function as argument, this argument calls a dynamic import

// step1:
// A promise is returned by this dynamic import which is then converted into module contains a default exported react component

// step2:
// we include the lazy component as part of the route configuration
// fallback prop should be any react element


// 15.Authentication and Protocol
function App() {
  return (
    <AuthProvider>
      {/* 04.Links */}
      <Navbar />
      <Routes>
        {/* 03.Configuring Routes */}
          <Route path="/" element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
        {/* 14.Lazy Loading */}
          <Route path="about" element={<React.Suspense fallback='Loading...'><LazyAbout /></React.Suspense>} />
        {/* 06.Navigating programatically */}
          <Route path="order-summary" element={<NavigProg />} />
        {/* 08.Nested Routes */}
          <Route path="products" element={<NestedRoutesProducts />}>
            {/* 09.Index Route */}
              <Route index element={<FeaturedProducts />} />
              <Route path='featured' element={<FeaturedProducts />} />
              <Route path='new' element={<NewProducts />} />
          </Route>
        {/* 10.Dynamic Routes */}
          {/* <Route path='users' element={<Users />} /> */}
          {/* <Route path='users/1' element={<UserDetails />} />
          <Route path='users/2' element={<UserDetails />} />
          <Route path='users/3' element={<UserDetails />} /> */}
          {/* <Route path='users/:userId' element={<UserDetails />} /> */}
          {/* <Route path='users/admin' element={<UserDetails />} /> */}
          {/* <Route path='users/admin' element={<Admin />} /> */}
          <Route path='users' element={<Users />}>
            <Route path=':userId' element={<UserDetails />} />
            <Route path='admin' element={<Admin />} />
          </Route>
        {/* 12.search params */}
          {/* <Route path='users' element={<SearchParams />} /> */}
        {/* 15.Authentication and Protected Routes */}
          <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path='login' element={<Login />} />
        {/* 07.Nomatch Route */}
          <Route path="*" element={<NoMatchRoute />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;