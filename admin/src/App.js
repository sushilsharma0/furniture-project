import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SideBar from "./components/SideBar";
import Products from "./pages/products/Products";
import AddProducts from "./pages/AddProduct/AddProducts";
import Users from "./pages/Users/Users";
import ShowProducts from "./pages/showProducts/Showproducts";
import UsersProfile from "./pages/usersProfile/UsersProfile";
import DashBoard from "./pages/Home/DashBoard";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="flex justify-between">
        <div>
        <SideBar />
        </div>
        <div>
          <AnimatePresence exitBeforeEnter={false}>
            <Routes location={location}>
            <Route
                path="/"
                element={
                  <AnimatedRoute>
                  <DashBoard />
                  </AnimatedRoute>
                }
              />
              <Route
                path="/products"
                element={
                  <AnimatedRoute>
                    <Products />
                  </AnimatedRoute>
                }
              />
              <Route
                path="/add"
                element={
                  <AnimatedRoute>
                    <AddProducts />
                  </AnimatedRoute>
                }
              />
              <Route
                path="/users"
                element={
                  <AnimatedRoute>
                    <Users />
                  </AnimatedRoute>
                }
              />
              <Route
                path="/product/:id"
                element={
                  <AnimatedRoute>
                    <ShowProducts />
                  </AnimatedRoute>
                }
              />
              <Route
                path="/user/:id"
                element={
                  <AnimatedRoute>
                    <UsersProfile />
                  </AnimatedRoute>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

const AnimatedRoute = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default App;
