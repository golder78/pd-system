import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UploadPhotoPage } from './pages/UploadPhotoPage';
import { ViewPhotosPage } from './pages/ViewPhotosPage';
import { UpdatePhotoPage } from './pages/UpdatePhotoPage';
import { SearchPhotosPage } from './pages/SearchPhotosPage';
import { ManageCategoriesPage } from './pages/ManageCategoriesPage';
import { ManageTagsPage } from './pages/ManageTagsPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import axios from 'axios';

// Configure Axios for API requests
axios.defaults.baseURL = 'http://127.0.0.1:5000'; 
axios.defaults.headers.common['Content-Type'] = 'application/json';

function App() {
  const appContainerStyle = {
    minHeight: '100vh',
    padding: '1.5rem',
    background: 'linear-gradient(135deg, rgba(31, 28, 44, 0.85), rgba(146, 141, 171, 0.75)), url("https://example.com/your-background-image.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    fontFamily: 'Roboto, sans-serif',
    position: 'relative',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1.5rem 2rem',
    marginBottom: '2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '25px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    fontFamily: 'Poppins, sans-serif',
    letterSpacing: '1px',
  };

  const linkStyle = {
    fontSize: '1.4rem',
    color: '#FFB6C1',
    textDecoration: 'none',
    fontWeight: '700',
    transition: 'all 0.3s ease',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
  };

  const hoverLinkStyle = {
    color: '#FFC0CB',
    transform: 'scale(1.1)',
    boxShadow: '0 4px 10px rgba(255, 255, 255, 0.4)',
  };

  return (
    <Router>
      <div style={appContainerStyle}>
        <nav style={navStyle}>
          {['/', '/upload', '/view', '/search', '/categories', '/tags', '/login'].map((path, index) => {
            const linkText = ['Home', 'Upload Photo', 'View Photos', 'Search Photos', 'Manage Categories', 'Manage Tags', 'Login Page'][index];
            return (
              <Link
                key={path}
                style={linkStyle}
                to={path}
                onMouseEnter={(e) => (e.target.style.color = hoverLinkStyle.color)}
                onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
              >
                {linkText}
              </Link>
            );
          })}
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPhotoPage />} />
          <Route path="/view" element={<ViewPhotosPage />} />
          <Route path="/update/:photoId" element={<UpdatePhotoPage />} />
          <Route path="/search" element={<SearchPhotosPage />} />
          <Route path="/categories" element={<ManageCategoriesPage />} />
          <Route path="/tags" element={<ManageTagsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
