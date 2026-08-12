import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Marketplace from './pages/Marketplace';
import ProductDetails from './pages/ProductDetails';
import Community from './pages/Community';
import PostDetails from './pages/PostDetails';
import Collection from './pages/Collection';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/marketplace" replace />}
          />

          <Route
            path="/marketplace"
            element={<Marketplace />}
          />

          <Route
            path="/marketplace/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/community"
            element={<Community />}
          />

          <Route
            path="/community/:id"
            element={<PostDetails />}
          />

          <Route
            path="/collection"
            element={<Collection />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;