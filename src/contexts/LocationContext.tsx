import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface LocationData {
  city: string
  state: string
}

interface LocationContextType {
  location: LocationData | null
}

interface LocationContextProviderProps {
  children: ReactNode
}

export const LocationContext = createContext({} as LocationContextType);

export function LocationContextProvider({ children }: LocationContextProviderProps) {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [isLocationLoaded, setIsLocationLoaded] = useState(false);
  const [locationError, setLocationError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // https://nominatim.org/release-docs/develop/api/Reverse/

  async function handleLocation(position: any) {
    setIsLoading(true);

    try {
      const { latitude, longitude } = position.coords;
      const getLocation = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
      const locationResponse = await getLocation.json();

      setLocation({
        city: locationResponse.address.city,
        state: locationResponse.address.state
      });
    } catch(error) {
      setLocationError("Desculpe, não conseguimos encontrar seu endereço. Tente novamente mais tarde.");
      console.error(
        "Desculpe, não conseguimos encontrar seu endereço. Tente novamente mais tarde. ",
        error
      );
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!isLocationLoaded && navigator.geolocation) {
      setIsLocationLoaded(true);
      navigator.geolocation.getCurrentPosition(handleLocation, () => {
        setIsLocationLoaded(false);
        setLocationError("Desculpa, não conseguimos encontrar sua localização!");
      });
    } else {
      console.log("Geolocalização não suportada no navegador!");
    }
  }, [isLocationLoaded]);

  return (
    <LocationContext.Provider value={{ location }}>
      {children}
    </LocationContext.Provider>
  );
}

export const useLocation = () => {
  return useContext(LocationContext);
};