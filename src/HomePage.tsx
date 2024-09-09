import React, { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [bannerData, setBannerData] = useState<any>(null); // Replace `any` with the actual type of your banner data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  // Function to fetch banner data
  // const getBanner = async () => {
  //   try {
  //     setLoading(true); // Set loading to true before starting the request
  //     const data = await GetBanner(); // Call the GetBanner function
  //     setBannerData(data); // Update the state with the fetched data
  //   } catch (err) {
  //     console.error('Error fetching banner:', err);
  //     setError('Failed to load banner data'); // Set an error message if the request fails
  //   } finally {
  //     setLoading(false); // Set loading to false when the request completes (whether successful or failed)
  //   }
  // };

  // Call getBanner when the component mounts
  useEffect(() => {
    // getBanner();
  }, []);

  return (
    <div>
      <h1>This is my Home Page</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {bannerData && (
        <div>
          <h2>Banner</h2>
          {/* Adjust based on the actual structure of bannerData */}
          <img src={bannerData.imageUrl} alt={bannerData.title} />
          <p>{bannerData.description}</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
