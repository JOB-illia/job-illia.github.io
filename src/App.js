import './App.css';
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";
import PhotoAlbumPage from "./pages/PhotoAlbumPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <Suspense fallback={<div>Loading....</div>}>
          <div className="App">
              <Header />
              <Routes>
                  <Route path={'/'} element={<HomePage />} />
                  <Route path="/technology" element={<TechnologyPage/>} />
                  <Route path="/photoalbum" element={<PhotoAlbumPage/>} />
                  <Route path="/contact" element={<ContactPage/>} />
              </Routes>
              <Footer />
          </div>
      </Suspense>
  );
}

export default App;
