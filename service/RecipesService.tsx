export interface IRecipeInterface {
  id: string;
  title: string;
  difficulty: string;
  image: string;
}

export const getRecipes = async (): Promise<IRecipeInterface[]> => {
  const url = "https://the-cocktail-db3.p.rapidapi.com/";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "652b15b2cfmsh5e1e2e00d29d4d3p1fdc23jsne002a61f5db9",
      "X-RapidAPI-Host": "the-cocktail-db3.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    if (response.status === 200) {
      const data: IRecipeInterface[] = await response.json();
      return data;
    } else {
      throw Error();
    }
  } catch (e) {
    throw Error(`${e}`);
  }
};
