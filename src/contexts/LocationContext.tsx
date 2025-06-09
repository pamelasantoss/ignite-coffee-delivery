import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface LocationData {
  city: string;
  state: string;
}

interface LocationContextType {
  location: LocationData | null;
  isLoading: boolean;
  locationError: string;
}

interface LocationContextProviderProps {
  children: ReactNode;
}

export const LocationContext = createContext({} as LocationContextType);

export function LocationContextProvider({
  children,
}: LocationContextProviderProps) {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [isLocationLoaded, setIsLocationLoaded] = useState(false);
  const [locationError, setLocationError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleLocation(position: GeolocationPosition) {
    setIsLoading(true);
    setLocationError("");

    try {
      const { latitude, longitude } = position.coords;
      const getLocation = await fetch(
        // eslint-disable-next-line max-len
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const locationResponse = await getLocation.json();

      setLocation({
        city: locationResponse.address.city,
        state: locationResponse.address.state,
      });
    } catch (error) {
      setLocationError(
        "Desculpe, não conseguimos encontrar sua localização. Tente novamente mais tarde."
      );
      console.error(
        // eslint-disable-next-line max-len
        "Desculpe, não conseguimos encontrar sua localização. Tente novamente mais tarde. ",
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
        setLocationError(
          // eslint-disable-next-line max-len
          "Desculpe, não conseguimos encontrar sua localização. Verifique as configurações do seu navegador."
        );
      });
    }
  }, [isLocationLoaded]);

  return (
    <LocationContext.Provider value={{ location, isLoading, locationError }}>
      {children}
    </LocationContext.Provider>
  );
}

export const useLocation = () => {
  return useContext(LocationContext);
};
