import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const API_URL = process.env.REACT_APP_API_URL;
const USER_KEY = 'user';
const CART_KEY = 'cart_products';
const useAuthService = () => {
  const storageService = useStorageService();
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!storageService.getStorageValue(USER_KEY);
  });
  const  CartProduct = {
    productId: number,
    quantity: number,
    price: number,
    name: string,
    img: string,
    stock: number,
  };
  const login = (username, password) => {
    fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((res) => {
        storageService.setStorageValue(USER_KEY, res);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        // Handle login error
      });
  };

  const logout = () => {
    storageService.removeFromStorage(USER_KEY);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    // Add any additional logic for maintaining authentication state, e.g., checking token expiration
  }, []);

  return {
    isLoggedIn,
    login,
    logout,
  };
};

const useCartService = () => {
  const storageService = useStorageService();
  const [cartProducts, setCartProducts] = useState(() => {
    return storageService.getStorageValue(CART_KEY) || [];
  });
  const getQuantityOfProduct = (productId) => {
    let productQuantity = 0;
    cartProducts.forEach((product) => {
      if (product.productId === productId) {
        productQuantity = product.quantity;
        return;
      }
    });

    return productQuantity;
  };

  const addToCart = (product) => {
    if (product.quantity > 0 && !changeQuantityOfProduct(product.productId, product.quantity)) {
      setCartProducts([product, ...cartProducts]);
      updateStorageValue();
    }
  };

  const removeFromCart = (productId) => {
    setCartProducts(cartProducts.filter((product) => product.productId !== productId));
    updateStorageValue();
  };

  const clearCartProducts = () => {
    storageService.removeFromStorage(CART_KEY);
    setCartProducts([]);
  };

  const updateStorageValue = () => {
    storageService.setStorageValue(CART_KEY, cartProducts);
  };

  const changeQuantityOfProduct = (productId, quantity) => {
    let productFound = false;

    if (!cartProducts) return false;

    cartProducts.forEach((product) => {
      if (product.productId === productId) {
        product.quantity = quantity;
        productFound = true;
        return;
      }
    });
    updateStorageValue();

    return productFound;
  };

  return {
    getCartProducts,
    getQuantityOfProduct,
    addToCart,
    removeFromCart,
    clearCartProducts,
  };
}

const Cart = ({  cartProducts}) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartService = new useCartService();
    cartService.getCartProducts().then((response) => {
      setProducts(response.data);
      calculateTotalPrice(response.data);
    });
  }, []);

  const calculateTotalPrice = (products) => {
    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    setTotal(totalPrice);
  };

  const removeFromCart = (productId, productIndex) => {
    const updatedTotal = total - (products[productIndex].price * products[productIndex].quantity);
    setTotal(updatedTotal);
    const cartService = new useCartService();
    cartService.removeFromCart(productId);
  };

  const productQuantityChanged = (productIndex, productQuantity) => {
    const updatedProducts = [...products];
    updatedProducts[productIndex].quantity = productQuantity;
    const cartService = new useCartService();
    cartService.addToCart(updatedProducts[productIndex]);
    calculateTotalPrice(updatedProducts);
  };
  return (
    <div className="container flex min-h-screen items-center pt-24">
      {products && products.length ? (
        <div className="mb-auto flex h-full w-full flex-col gap-8 md:flex-row">
          <div className="flex-2">
            <div className="flex items-center gap-3">
              <h2 className="my-3 text-2xl font-bold text-accent">Cart</h2>
              <span className="rounded-md bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-600">
                {products.length} item{products.length > 1 ? "s" : ""}
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {products.map((product, i) => (
                <div key={i} className="overflow-hidden rounded-md border bg-gray-50">
                  <div className="flex flex-wrap">
                    <div className="product-img flex-1">
                      <img src={product.img} alt="" className="aspect-square h-full object-cover" />
                    </div>
                    <div className="flex-3 flex flex-col items-start justify-between gap-4 p-4">
                      <div className="flex w-full flex-wrap justify-between gap-4 text-lg font-bold text-accent">
                        <a className="transition-colors duration-300 hover:text-primary" href={"/product/" + product.productId}>{product.name}</a>
                        <p>{product.price}</p>
                      </div>
                      <div className="flex w-full flex-wrap items-center justify-between gap-4">
                        <div className="control-quantity flex items-stretch">
                          <button onClick={() => product.quantity > 1 ? productQuantityChanged(i, product.quantity - 1) : true}>-</button>
                          <input type="number" className="w-14 border p-2 text-center text-lg outline-none focus:border-primary" value={product.quantity} min="1" max={product.stock} onChange={(e) => productQuantityChanged(i, +e.target.value)} />
                          <button onClick={() => product.quantity < product.stock ? productQuantityChanged(i, product.quantity + 1) : true}>+</button>
                        </div>
                        <span className="rounded-md bg-gray-200 px-2 py-1 font-semibold text-gray-600">{product.stock} in stock</span>
                      </div>
                      <button className="btn-outline-accent flex gap-2 text-sm" onClick={() => removeFromCart(product.productId, i)}>
                        <i className="fa fa-trash"></i>
                        <span>Remove from cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h2 className="my-3 text-2xl font-bold text-accent">Order Summary</h2>
            <div className="flex flex-col gap-6 overflow-hidden rounded-md border bg-gray-50 p-4">
              <p className="flex justify-between gap-4 text-xl font-bold text-accent">
                <span>Total</span>
                <span>{total}</span>
              </p>
              <a href="/checkout" className="btn-fill-primary w-full text-lg text-center">Checkout</a>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-8 flex h-full w-full flex-col items-center justify-center">
          <p className="mb-12 text-4xl font-semibold text-accent">Your cart is empty</p>
          <div className="empty-cart w-1/2">
            <img src="../../../assets/imgs/empty-cart.png" alt="" className="w-full" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;


