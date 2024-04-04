export interface IRecipeResponseId {
  title: string;
  portion: string;
  time: string;
  description: string;
  ingredients: string[];
  method: Array<{ [key: string]: string }>;
  image: string;
}

export const getRecipeById = async (id: string) => {
  const url = `https://the-cocktail-db3.p.rapidapi.com/${id}`;
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
      const data = await response.json();
      return data;
    } else {
      throw Error();
    }
  } catch (e) {
    throw Error(`${e}`);
  }
};
