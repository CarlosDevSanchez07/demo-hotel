export interface Country {
  code: string;
  name: string;
  continent: {
    name: string;
  };
  languages: {
    name: string;
  }[];
}

export const fetchCountries = async (): Promise<Country[]> => {
  const response = await fetch("https://countries.trevorblades.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        {
          countries {
            code
            name
            continent {
              name
            }
            languages {
              name
            }
          }
        }
      `,
    }),
  });

  const result = await response.json();
  return result.data?.countries;
};
