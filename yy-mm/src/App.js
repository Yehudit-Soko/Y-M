// App
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import HomePage from "./pages/HomePage";
import Products from "./pages/ProductsPage";
import ShoppingCart from "./pages/ShoppingCartPage";
import ContactUs from "./pages/ContactUsPage";
import AddToCart from "./pages/AddToCartPage";
import CheckOut from "./pages/CheckoutPage";

function App(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/products" element={<Products type="default" />}></Route>
          <Route path="/piano" element={<Products type="piano" />}></Route>
          <Route path="/violin" element={<Products type="violin" />}></Route>
          <Route path="/special" element={<Products type="harp" />}></Route>
          <Route path="/guitar" element={<Products type="guitar" />}></Route>
          <Route path="/shoppingCart" element={<ShoppingCart />}></Route>
          <Route path="/contactUs" element={<ContactUs />}></Route>
          <Route path="/AddToCart" element={<AddToCart />}></Route>
          <Route path="/checkOut" element={<CheckOut />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
