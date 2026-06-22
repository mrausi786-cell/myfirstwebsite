"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, INITIAL_PRODUCTS, CATEGORIES } from "@/data/mockData";

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: { name: string; hex: string };
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  status: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
  shippingAddress: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  paymentMethod: "Stripe" | "PayPal";
  trackingNumber?: string;
}

export interface User {
  email: string;
  fullName: string;
  isAdmin: boolean;
  phone?: string;
}

interface StoreContextType {
  products: Product[];
  categories: string[];
  cart: CartItem[];
  wishlist: string[]; // Product IDs
  orders: Order[];
  currentUser: User | null;
  isAdminMode: boolean;
  couponCode: string;
  appliedDiscount: number; // percentage or fixed
  shippingMethod: string; // 'standard' | 'express'
  
  // Actions
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  addCategory: (category: string) => void;
  deleteCategory: (category: string) => void;
  
  // Cart Actions
  addToCart: (product: Product, size: string, color: { name: string; hex: string }, quantity?: number) => void;
  removeFromCart: (productId: string, size: string, colorHex: string) => void;
  updateCartQuantity: (productId: string, size: string, colorHex: string, quantity: number) => void;
  clearCart: () => void;
  
  // Wishlist Actions
  toggleWishlist: (productId: string) => void;
  
  // Coupon Actions
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  setShippingMethod: (method: string) => void;
  
  // Order Actions
  placeOrder: (shippingDetails: Order["shippingAddress"], paymentMethod: Order["paymentMethod"]) => Order;
  updateOrderStatus: (orderId: string, status: Order["status"], trackingNumber?: string) => void;
  
  // Auth Actions
  login: (email: string, fullName: string, isAdmin: boolean) => void;
  signup: (email: string, fullName: string) => void;
  logout: () => void;
  toggleAdminMode: () => void;

  // Calculators
  getCartSubtotal: () => number;
  getCartTotal: () => number;
  getCartShipping: () => number;
  getCartDiscountAmount: () => number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAdminMode, setIsAdminMode] = useState<boolean>(false);
  const [couponCode, setCouponCode] = useState<string>("");
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0); // e.g. 0.1 for 10%
  const [shippingMethod, setShippingMethodState] = useState<string>("standard");

  // Load state from localStorage on client render
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Products
      const localProducts = localStorage.getItem("ss_products");
      if (localProducts) {
        setProducts(JSON.parse(localProducts));
      } else {
        setProducts(INITIAL_PRODUCTS);
        localStorage.setItem("ss_products", JSON.stringify(INITIAL_PRODUCTS));
      }

      // Categories
      const localCategories = localStorage.getItem("ss_categories");
      if (localCategories) {
        setCategories(JSON.parse(localCategories));
      } else {
        setCategories(CATEGORIES);
        localStorage.setItem("ss_categories", JSON.stringify(CATEGORIES));
      }

      // Cart
      const localCart = localStorage.getItem("ss_cart");
      if (localCart) setCart(JSON.parse(localCart));

      // Wishlist
      const localWishlist = localStorage.getItem("ss_wishlist");
      if (localWishlist) setWishlist(JSON.parse(localWishlist));

      // Orders
      const localOrders = localStorage.getItem("ss_orders");
      if (localOrders) {
        setOrders(JSON.parse(localOrders));
      } else {
        // Initialize with default demo order
        const demoOrder: Order = {
          id: "ORD-9284-SS",
          date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toLocaleDateString(),
          items: [
            {
              product: INITIAL_PRODUCTS[0],
              selectedSize: "M",
              selectedColor: INITIAL_PRODUCTS[0].colors[0],
              quantity: 1
            }
          ],
          subtotal: 8500,
          discount: 0,
          shipping: 0,
          total: 8500,
          status: "Delivered",
          shippingAddress: {
            fullName: "John Doe",
            email: "mr.ausi786@gmail.com",
            phone: "0414 863 411",
            address: "100 Fashion Blvd",
            city: "Lahore",
            state: "Punjab",
            postalCode: "54000",
            country: "Pakistan"
          },
          paymentMethod: "Stripe",
          trackingNumber: "PK-SHAHROZE-09284"
        };
        setOrders([demoOrder]);
        localStorage.setItem("ss_orders", JSON.stringify([demoOrder]));
      }

      // Auth
      const localUser = localStorage.getItem("ss_user");
      if (localUser) {
        const parsed = JSON.parse(localUser);
        setCurrentUser(parsed);
        if (parsed.isAdmin) setIsAdminMode(true);
      }
    }
  }, []);

  // Save actions to local storage helper
  const saveProducts = (updatedProducts: Product[]) => {
    setProducts(updatedProducts);
    localStorage.setItem("ss_products", JSON.stringify(updatedProducts));
  };

  const saveCategories = (updatedCategories: string[]) => {
    setCategories(updatedCategories);
    localStorage.setItem("ss_categories", JSON.stringify(updatedCategories));
  };

  const saveCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    localStorage.setItem("ss_cart", JSON.stringify(updatedCart));
  };

  const saveWishlist = (updatedWishlist: string[]) => {
    setWishlist(updatedWishlist);
    localStorage.setItem("ss_wishlist", JSON.stringify(updatedWishlist));
  };

  const saveOrders = (updatedOrders: Order[]) => {
    setOrders(updatedOrders);
    localStorage.setItem("ss_orders", JSON.stringify(updatedOrders));
  };

  // Product actions
  const addProduct = (product: Product) => {
    const updated = [product, ...products];
    saveProducts(updated);
  };

  const updateProduct = (product: Product) => {
    const updated = products.map((p) => (p.id === product.id ? product : p));
    saveProducts(updated);
  };

  const deleteProduct = (id: string) => {
    const updated = products.filter((p) => p.id !== id);
    saveProducts(updated);
  };

  // Category actions
  const addCategory = (category: string) => {
    if (!categories.includes(category)) {
      const updated = [...categories, category];
      saveCategories(updated);
    }
  };

  const deleteCategory = (category: string) => {
    const updated = categories.filter((c) => c !== category);
    saveCategories(updated);
  };

  // Cart actions
  const addToCart = (product: Product, size: string, color: { name: string; hex: string }, quantity = 1) => {
    const updated = [...cart];
    const existingIndex = updated.findIndex(
      (item) =>
        item.product.id === product.id &&
        item.selectedSize === size &&
        item.selectedColor.hex === color.hex
    );

    if (existingIndex > -1) {
      updated[existingIndex].quantity += quantity;
    } else {
      updated.push({ product, selectedSize: size, selectedColor: color, quantity });
    }
    saveCart(updated);
  };

  const removeFromCart = (productId: string, size: string, colorHex: string) => {
    const updated = cart.filter(
      (item) =>
        !(item.product.id === productId && item.selectedSize === size && item.selectedColor.hex === colorHex)
    );
    saveCart(updated);
  };

  const updateCartQuantity = (productId: string, size: string, colorHex: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size, colorHex);
      return;
    }
    const updated = cart.map((item) =>
      item.product.id === productId && item.selectedSize === size && item.selectedColor.hex === colorHex
        ? { ...item, quantity }
        : item
    );
    saveCart(updated);
  };

  const clearCart = () => {
    saveCart([]);
    setCouponCode("");
    setAppliedDiscount(0);
  };

  // Wishlist Actions
  const toggleWishlist = (productId: string) => {
    const updated = [...wishlist];
    const index = updated.indexOf(productId);
    if (index > -1) {
      updated.splice(index, 1);
    } else {
      updated.push(productId);
    }
    saveWishlist(updated);
  };

  // Coupon Actions
  const applyCoupon = (code: string): boolean => {
    const cleanCode = code.toUpperCase().trim();
    if (cleanCode === "WELCOME10") {
      setCouponCode("WELCOME10");
      setAppliedDiscount(0.10); // 10% off
      return true;
    } else if (cleanCode === "STUDIO20") {
      setCouponCode("STUDIO20");
      setAppliedDiscount(0.20); // 20% off
      return true;
    } else if (cleanCode === "FREESHIP") {
      setCouponCode("FREESHIP");
      // Checked dynamically during totals calculations
      setAppliedDiscount(0);
      return true;
    }
    return false;
  };

  const removeCoupon = () => {
    setCouponCode("");
    setAppliedDiscount(0);
  };

  const setShippingMethod = (method: string) => {
    setShippingMethodState(method);
  };

  // Calculations
  const getCartSubtotal = () => {
    return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  };

  const getCartDiscountAmount = () => {
    const subtotal = getCartSubtotal();
    return subtotal * appliedDiscount;
  };

  const getCartShipping = () => {
    const subtotal = getCartSubtotal();
    if (couponCode.toUpperCase() === "FREESHIP") return 0;
    if (subtotal >= 5000) return 0; // Free shipping over Rs. 5,000
    
    if (shippingMethod === "express") {
      return 350; // Express Shipping flat Rs. 350
    }
    return 200; // Standard Shipping flat Rs. 200
  };

  const getCartTotal = () => {
    const subtotal = getCartSubtotal();
    const discount = getCartDiscountAmount();
    const shipping = getCartShipping();
    return Math.max(0, subtotal - discount + shipping);
  };

  // Order Actions
  const placeOrder = (shippingDetails: Order["shippingAddress"], paymentMethod: Order["paymentMethod"]) => {
    const subtotal = getCartSubtotal();
    const discount = getCartDiscountAmount();
    const shipping = getCartShipping();
    const total = getCartTotal();

    const newOrder: Order = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}-SS`,
      date: new Date().toLocaleDateString(),
      items: [...cart],
      subtotal,
      discount,
      shipping,
      total,
      status: "Processing",
      shippingAddress: shippingDetails,
      paymentMethod,
      trackingNumber: `PK-SHAHROZE-${Math.floor(100000 + Math.random() * 900000)}`
    };

    const updatedOrders = [newOrder, ...orders];
    saveOrders(updatedOrders);
    clearCart();

    return newOrder;
  };

  const updateOrderStatus = (orderId: string, status: Order["status"], trackingNumber?: string) => {
    const updated = orders.map((order) => {
      if (order.id === orderId) {
        return {
          ...order,
          status,
          trackingNumber: trackingNumber !== undefined ? trackingNumber : order.trackingNumber
        };
      }
      return order;
    });
    saveOrders(updated);
  };

  // Auth Actions
  const login = (email: string, fullName: string, isAdmin: boolean) => {
    const newUser: User = { email, fullName, isAdmin };
    setCurrentUser(newUser);
    if (isAdmin) setIsAdminMode(true);
    localStorage.setItem("ss_user", JSON.stringify(newUser));
  };

  const signup = (email: string, fullName: string) => {
    const newUser: User = { email, fullName, isAdmin: email.toLowerCase() === "mr.ausi786@gmail.com" };
    setCurrentUser(newUser);
    if (newUser.isAdmin) setIsAdminMode(true);
    localStorage.setItem("ss_user", JSON.stringify(newUser));
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAdminMode(false);
    localStorage.removeItem("ss_user");
  };

  const toggleAdminMode = () => {
    setIsAdminMode(!isAdminMode);
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        categories,
        cart,
        wishlist,
        orders,
        currentUser,
        isAdminMode,
        couponCode,
        appliedDiscount,
        shippingMethod,
        
        addProduct,
        updateProduct,
        deleteProduct,
        addCategory,
        deleteCategory,
        
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        
        toggleWishlist,
        
        applyCoupon,
        removeCoupon,
        setShippingMethod,
        
        placeOrder,
        updateOrderStatus,
        
        login,
        signup,
        logout,
        toggleAdminMode,

        getCartSubtotal,
        getCartTotal,
        getCartShipping,
        getCartDiscountAmount
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
