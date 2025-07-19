import { useState, useEffect } from "react";

// Custom Hook to get the current location and log changes
const useLocation = () => {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
          setError(null);
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`); // Log the position
        },
        () => {
          setError("Location access denied.");
        },
        { enableHighAccuracy: true, maximumAge: 10000 }
      );

      // Cleanup the watch when the component unmounts
      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  return { location, error };
};

export default useLocation;
