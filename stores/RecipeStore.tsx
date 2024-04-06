import { create } from "zustand";
import { IRecipeInterface } from "../service/RecipesService";

type TDataStore = {
  recipes: Array<IRecipeInterface>;
  originalRecipes: Array<IRecipeInterface>;
  setRecipes: (data: Array<IRecipeInterface>) => void;
  searchRecipe: (query: string | null, recipes: IRecipeInterface[]) => void;
};

export const useDataStore = create<TDataStore>((set) => ({
  recipes: [],
  originalRecipes: [],
  setRecipes: (data) =>
    set((state) => ({ recipes: data, originalRecipes: data })),
  searchRecipe: (query, recipes) => {
    if (query !== null && query.length !== 0) {
      const lowercaseQuery = query.toLowerCase();
      const filterArray = recipes.filter((item) => {
        return item.title.toLowerCase().includes(lowercaseQuery);
      });

      set({ recipes: filterArray });
    } else {
      set((state) => ({ recipes: state.originalRecipes }));
    }
  },
}));
