import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewArrival from "./pages/newArrival";
import Collection from "./pages/collectionPage";
import Contact from "./pages/contact";
import Navbar from "./component/Navbar";
import SignupPopup from "./component/SignupPopup";
import LoginPopup from "./component/LoginPopup";
import TopBanner from "./component/TopBanner";
import "./App.css";

function App() {
  
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);

  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const [bannerVisible, setBannerVisible] = useState(true);
  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <BrowserRouter>
    {bannerVisible && ( <TopBanner onClose={() => setBannerVisible(false)} /> )}
      <Navbar
      
        wishlistCount={wishlist.length}
        user={user}
        onLogout={handleLogout}
        onOpenSignup={() => setShowSignup(true)}
        onOpenLogin={() => setShowLogin(true)}
        bannerVisible={bannerVisible}        
      />

      {showSignup && (
        <SignupPopup
          onClose={() => setShowSignup(false)}
          onSignupSuccess={() => console.log("Signup success")}
        />
      )}

      {showLogin && (
        <LoginPopup
          onClose={() => setShowLogin(false)}
          onLoginSuccess={(u) => setUser(u)}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={<Home wishlist={wishlist} toggleWishlist={toggleWishlist} />}
        />
        <Route
          path="/newarrival"
          element={<NewArrival wishlist={wishlist} toggleWishlist={toggleWishlist} />}
        />
        <Route
          path="/mostwanted"
          element={<Home wishlist={wishlist} toggleWishlist={toggleWishlist} />}
        />
        <Route
          path="/collections"
          element={<Collection wishlist={wishlist} toggleWishlist={toggleWishlist} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
