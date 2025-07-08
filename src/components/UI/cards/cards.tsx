import { useState, useEffect } from "react";

const UNSPLASH_ACCESS_KEY = "W1GkEl6yXFioj_EelJtNFnI3svHLnp59byJll2V9VJc";

type UnsplashImage = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
};

const SearchCars = () => {
  const [query, setQuery] = useState("car");
  const [images, setImages] = useState<UnsplashImage[]>([]);

  const fetchImages = async () => {
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=9&client_id=${UNSPLASH_ACCESS_KEY}`
      );
      const data = await res.json();
      console.log(data)
      setImages(data.results);
    } catch (err) {
      console.error("Failed to fetch images", err);
    }
  };

  useEffect(() => {
    fetchImages(); // default fetch on mount
  }, []);

  return (
    <div className="p-8">
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search cars..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 border rounded-l w-64"
        />
        <button
          onClick={fetchImages}
          className="bg-blue-600 text-white px-4 py-2 rounded-r"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {images.map((img) => (
    <div
      key={img.id}
      className="w-full h-64 overflow-hidden rounded shadow relative"
    >
      <img
        src={img.urls.small}
        alt={img.alt_description || "car image"}
        className="w-full h-full object-cover"
      />    
    </div>  
 ))}
</div>
    </div>
  );
};

export default SearchCars;
