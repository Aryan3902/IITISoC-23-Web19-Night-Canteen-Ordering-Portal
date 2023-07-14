// // import Navbar3 from "./users/components/Navbar3";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import {BrowserRouter,Route, Routes } from "react-router-dom";
// import LoginPage from "./users/pages/login_page/loginPage";
// import MenuPage from "./users/pages/menu_page/menuPage";
// import Home from "./users/pages/home/Home";
// import AboutPage from "./users/pages/about_page/aboutPage";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import UpdatePage from "./users/pages/services_page/servicesPage";
// import AMenuPage from "./users/pages/menu_page/amenuPage";
// import SignupPage from "./users/pages/signup_page/signupPage";
// import { useAuth } from "./hooks/authhook";
// import { AuthContext } from "./context/auth-context";




// // const router = createBrowserRouter([
// //   {

// //     path: "/",
// // 	element: <LoginPage />,
// // },
// // {
	
// // 	path: "/home",
// // 	element: <Home />,
// //   },
// //   {
// //     path: "/login",
// //     element: <LoginPage />,
// //   },
// //   {
// //     path: "/menu",
// //     element: <MenuPage />,
// //   },
// //   {
// //     path:"/about",
// //     element: <AboutPage />
// //   },
// //   {
// //     path: "/services/:id",
// //     element: <UpdatePage/>
// //   },
// //   {
// //     path: "/services",
// //     element: <AMenuPage/>
// //   },
// //   {
// //     path: "/signup",
// //     element: <SignupPage/>
// //   }
// // // 
// // ]);
// function App() {
//   let router
//   const [user, setUser] = useState(null);
//   const {token, Login, Logout, userId} = useAuth()
//   console.log(token);
//   if(token){

//   router = createBrowserRouter([
//     {
  
//       path: "/",
//     element: <LoginPage />,
//   },
//   {
    
//     path: "/home",
//     element: <Home />,
//     },
//     {
//       path: "/login",
//       element: <LoginPage />,
//     },
//     {
//       path: "/menu",
//       element: <MenuPage />,
//     },
//     {
//       path:"/about",
//       element: <AboutPage />
//     },
//     {
//       path: "/services/:id",
//       element: <UpdatePage/>
//     },
//     {
//       path: "/services",
//       element: <AMenuPage/>
//     },
//     {
//       path: "/signup",
//       element: <SignupPage/>
//     }
  
//   // 
//   ]);
// }else{
//   router = createBrowserRouter([
//     {
  
//       path: "/",
//     element: <LoginPage />,
//   },
//   {
    
//     path: "/home",
//     element: <Home />,
//     },
//     {
//       path: "/login",
//       element: <LoginPage />,
//     },
//     {
//       path: "/menu",
//       element: <MenuPage />,
//     },
//     {
//       path:"/about",
//       element: <AboutPage />
//     },
//     {
//       path: "/services/:id",
//       element: <UpdatePage/>
//     },
//     {
//       path: "/services",
//       element: <AMenuPage/>
//     }
//     ,
//     {
//       path: "/signup",
//       element: <SignupPage/>
//     }
  
//   // 
//   ]);
  
// }

// 	const getUser = async () => {
// 		try {
// 			const url = "http://localhost/5000/auth/login/success";
// 			const { data } = await axios.get(url, { withCredentials: true });
// 			setUser(data.user._json);
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	};
  
//   return (
//     <>
//     <AuthContext.Provider value={{isLoggedin: !!token, token: token, userId: userId, login: Login, logout: Logout}}>
//       {/* <Navbar3 />  */}
//       { <RouterProvider router={router} /> }
//       {/* <div >
// 			 <BrowserRouter>
// 			 <Routes>
// 				<Route
// 					exact
// 					path="/"
// 					// element={user ? <Home user={user} /> : <Navigate to="/login" />}
// 					component={Home}
// 				/>
// 				<Route
// 					exact
// 					path="/login"
// 					// element={user ? <Navigate to="/" /> : <LoginPage />}
// 					component={LoginPage}
// 				/>
// 				{<Route
// 					path="/signup"
// 					element={user ? <Navigate to="/" /> : <Signup />}
// 				/>  }
// 				</Routes>
// 				</BrowserRouter>
			
// 		</div> */}
//     </AuthContext.Provider>
//     </>
//   );
// }

// export default App;





// // import Navbar3 from "./users/components/Navbar3";
// import {
// 	createBrowserRouter,
// 	RouterProvider,
//   } from "react-router-dom";
//   import {BrowserRouter,Route, Routes } from "react-router-dom";
//   import LoginPage from "./users/pages/login_page/loginPage";
//   import MenuPage from "./users/pages/menu_page/menuPage";
//   import Home from "./users/pages/home/Home";
//   import AboutPage from "./users/pages/about_page/aboutPage";
//   import { useEffect, useState } from "react";
//   import axios from "axios";
//   import UpdatePage from "./users/pages/services_page/servicesPage";
  
  
//   const router = createBrowserRouter([
// 	{
  
// 	  path: "/",
// 	  element: <LoginPage />,
//   },
//   {
	  
// 	  path: "/home",
// 	  element: <Home />,
// 	},
// 	{
// 	  path: "/login",
// 	  element: <LoginPage />,
// 	},
// 	{
// 	  path: "/menu",
// 	  element: <MenuPage />,
// 	},
// 	{
// 	  path:"/about",
// 	  element: <AboutPage />
// 	},
// 	{
// 	  path: "/services/:id",
// 	  element: <UpdatePage/>
// 	}
//   ]);
//   function App() {
// 	const [user, setUser] = useState(null);
  
// 	  const getUser = async () => {
// 		  try {
// 			  const url = "http://localhost/5000/login/success";
// 			  const { data } = await axios.get(url, { withCredentials: true });
// 			  setUser(data.user._json);
// 		  } catch (err) {
// 			  console.log(err);
// 		  }
// 	  };
// 	  useEffect(()=>{
// 		  getUser()
// 	  },[])
	
// 	return (
// 	  <>
// 		{/* <Navbar3 />  */}
// 		{ <RouterProvider router={router} /> }
// 		{/* <div >
// 			   <BrowserRouter>
// 			   <Routes>
// 				  <Route
// 					  exact
// 					  path="/"
// 					  // element={user ? <Home user={user} /> : <Navigate to="/login" />}
// 					  component={Home}
// 				  />
// 				  <Route
// 					  exact
// 					  path="/login"
// 					  // element={user ? <Navigate to="/" /> : <LoginPage />}
// 					  component={LoginPage}
// 				  />
// 				  {<Route
// 					  path="/signup"
// 					  element={user ? <Navigate to="/" /> : <Signup />}
// 				  />  }
// 				  </Routes>
// 				  </BrowserRouter>
			  
// 		  </div> */}
// 	  </>
// 	);
//   }
  
//   export default App;
  
  

import './App.css';
import React, {useState} from 'react'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
// import Cart from './foodItems/Components/Cart';

// import MenuPage from './foodItems/Pages/menuPage';
// import Navbar from './shared/components/Navbar';
// import Background from "./users/components/background";

// import Home from './users/pages/home/Home';
// import LoginPage from './users/pages/login_page/loginPage';
// import AdminOrders from './food/pages/AdminOrders'
// import Updates from './food/pages/Updates';
// import NavbarAdmin from './food/components/NavbarAdmin';
// import AdminMenu from './food/pages/AdminMenu';
// import Users from './Users';

import Background from './users/components/background_components/background'
import Navbar from './users/components/navbar_component/Navbar'
import LoginPage from './users/pages/login_page/loginPage'
import Home from './users/pages/home/Home'
import MenuPage from './users/pages/menu_page/menuPage'
import Cart from './users/pages/cart_page/Cart'
import AdminOrders from './food/pages/orders_page/AdminOrders'
import Updates from './food/pages/updates_page/Updates'
import AdminMenu from './food/pages/menu_page/AdminMenu'
import SignupPage from './users/pages/signup_page/signupPage';
// import UpdateForm from "../../../components/Updateform";
import UpdateForm from "./food/components/menu_component/Updateform"
import ItemForm from './food/components/menu_component/Itemform';
import { useAuth } from "./hooks/authhook";
import { AuthContext } from "./context/auth-context";
import Logout from './users/components/login_page_components/logout';


export default function App() {
  const [user, setUser] = useState(null);
  const {token, Login, Logout, name} = useAuth()
  const [cart, setCart]=useState([]);
  const [updates,setUpdates]=useState([])

  const giveUpdates =()=>{
    setUpdates(updates.concat([1]))
  }

  const dismissUpdates =()=>{
    setUpdates(updates.splice(0,updates.length));
  }

  const handleClick= (item)=>{
        let isPresent=false;
        cart.forEach((product)=>{
            if(item.id===product.id){
                isPresent =true;
            }
        })
        if(isPresent){
            return;
        }
        else {  
            setCart([...cart,item]);
        }
    }

  const handleChange =(item, d)=>{
      let ind = cart.findIndex((data)=>data.id===item.id);
      setCart((prevValue)=>{
          prevValue[ind].amount +=d;
          if (prevValue[ind].amount === 0) prevValue[ind].amount = 1;
          return [...prevValue ];
  })}

  let routes;
  if(token){
    routes=(
      <>
       <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/logout' element={<Logout />} />
        <Route exact path='/signup' element={<SignupPage />} />
        <Route exact path='/services/:id' element={<UpdateForm />} />
        {/* <Route exact path='/services' element={<UpdateForm />} /> */}
        <Route exact path='/about' element={<ItemForm />} />
        <Route exact path="/user/about" element={<div></div>} />
        <Route exact path='/user/services' element={<div></div>} />
        <Route exact path="/user/home" element={<Home />} />
        <Route exact path='/user/menu' element={<MenuPage handleClick={handleClick} cart={cart}/> } />
        <Route exact path='/user/cart' element={<Cart size={cart.length} cart={cart} setCart={setCart} handleChange={handleChange} giveUpdates={giveUpdates} />} />
        <Route exact path='/admin/order' element={<AdminOrders cart={cart}/>} />
        <Route exact path='/admin/updates' element={<Updates dismissUpdates={dismissUpdates} updates={updates}/>} />
        <Route exact path='/admin/menu' element={<AdminMenu/>} />
      </>
    )
  }else{
    routes=(
      <>
       <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/logout' element={<LoginPage />}  />
        <Route exact path='/signup' element={<SignupPage />} />
        <Route exact path='/services/:id' element={<LoginPage />}  />
        {/* <Route exact path='/services' element={<UpdateForm />} /> */}
        <Route exact path='/about' element={<LoginPage />} />
        <Route exact path="/user/about" element={<LoginPage />}  />
        <Route exact path='/user/services' element={<LoginPage />}  />
        <Route exact path="/user/home" element={<LoginPage />}  />
        <Route exact path='/user/menu' element={<LoginPage />}  />
        <Route exact path='/user/cart' element={<LoginPage />} />
        <Route exact path='/admin/order' element={<LoginPage />} />
        <Route exact path='/admin/updates' element={<LoginPage />} />
        <Route exact path='/admin/menu' element={<LoginPage />}  />
      </>
    )
  }

  

  return (
    <AuthContext.Provider value={{isLoggedin: !!token, token: token, name: name, login: Login, logout: Logout}}>
    <BrowserRouter>
      {/* <Background />
      <Navbar size={cart.length} />
      <NavbarAdmin />
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path="/user/about" element={<div></div>}/>
        <Route exact path='/user/services' element={<div></div>} />
        <Route exact path="/user/home" element={<Home />} />
        <Route exact path='/user/menu' element={<MenuPage handleClick={handleClick} cart={cart}/> } />
        <Route exact path='/user/cart' element={<Cart size={cart.length} cart={cart} setCart={setCart} handleChange={handleChange} giveUpdates={giveUpdates} />} />
        
        <Route exact path='/admin/order' element={<AdminOrders cart={cart}/>} />
        <Route exact path='/admin/updates' element={<Updates dismissUpdates={dismissUpdates} updates={updates}/>} />
        <Route exact path='/admin/menu' element={<AdminMenu/>} />
        <Route exact path='/user/home' element={<Users/>} />
      </Routes>  */}
      <Background />
      <Navbar size={cart.length} />
      
      <Routes>
       {routes}
      </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}