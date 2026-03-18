import { createContext, useState, type ReactNode } from "react";

type FavoritesContextValue = {
    ids: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
};

export const FavoritesContext = createContext<FavoritesContextValue>({
    ids: [],
    addFavorite: (_id: string) => {},
    removeFavorite: (_id: string) => {},
});

export function FavoritesContextProvider({ children }: { children: ReactNode }) {
    const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

    function addFavorite(id: string) {
        setFavoriteIds((currentIds) => [...currentIds, id]);
    }

    function removeFavorite(id: string) {
        setFavoriteIds((currentIds) => currentIds.filter((favId) => favId !== id));
    }

    return (
        <FavoritesContext.Provider value={{ ids: favoriteIds, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;