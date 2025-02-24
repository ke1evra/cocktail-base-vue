export type Drink = {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate?: string | null;
  strTags?: string | null;
  strVideo?: string | null;
  strCategory: string;
  strIBA?: string | null;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES?: string | null;
  strInstructionsDE?: string | null;
  strInstructionsFR?: string | null;
  strInstructionsIT?: string | null;
  strInstructionsZH_HANS?: string | null;
  strInstructionsZH_HANT?: string | null;
  strDrinkThumb: string;
} & {
  [key in `strIngredient${number}`]?: string | null;
} & {
  [key in `strMeasure${number}`]?: string | null;
};

export type DrinksResponse = {
  drinks: Drink[];
};
