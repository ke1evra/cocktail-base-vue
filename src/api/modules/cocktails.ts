import { client } from '@/api/client';

const getDrinksSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

export const getDrinksSearch = async (cocktailCode: string) =>
  client(getDrinksSearchUrl, { method: 'GET', params: { s: cocktailCode } });
