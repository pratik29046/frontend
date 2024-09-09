import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Banner } from '../../services/apiRequestResponse';
import { GetBanner } from '../../services/authService';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [bannerData, setBannerData] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBannerData = async () => {
    try {
      setLoading(true);
      const data = await GetBanner();
      console.log('Banner data:', data);
      setBannerData(data);
    } catch (err) {
      console.error('Error fetching banner:', err);
      setError('Failed to load banner data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const userData = localStorage.getItem('registerFormData');
    
    if (!userData) {
      navigate('/login');
    } else {
      fetchBannerData(); 
    }
  }, [navigate]);

  return (
    <div>
      <h1>This is my Home Page</h1>
      {loading && <p>Loading banners...</p>}
      {error && <p>{error}</p>}
      {bannerData.length > 0 && (
        <div>
          <h2>Banners</h2>
          {bannerData.map(banner => (
            <div key={banner.id}>
              <h3>Banner {banner.id}</h3>
              <img src={'https://jugnu.app/'+banner.website_banner} alt={`Banner ${banner.id}`} style={{ width: '10%', height: '50px' }} />
              <p>URL: {banner.url}</p>
              <p>Type: {banner.banner_type}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;


// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Home: React.FC = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userData = localStorage.getItem('registerFormData');
//     if (!userData) {
//       navigate('/login');
//     }
//   }, [navigate]);

//   return (
//     <div>
//       <h1>This is my Home Page</h1>
//     </div>
//   );
// };

// export default Home;
