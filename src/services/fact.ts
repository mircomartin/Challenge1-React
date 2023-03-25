const ENDPOINT_FACT = "https://catfact.ninja/fact";

export const fetchFacts = async (): Promise<string> => {

	const response = await fetch(ENDPOINT_FACT);
  const data = await response.json();
  return data.fact;

}

export const getImageFromApi = async ( fact: string ) => {

  const response = await fetch(`https://cataas.com/cat/says/${fact.split(' ')[0]}?json=true`);
  const data = await response.json();
  return data.url;

}