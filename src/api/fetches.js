export async function getContactsFetch() {
  const BASE_URL = "https://61b2044cc8d4640017aaf12a.mockapi.io/contacts";

  const response = await fetch(BASE_URL).then((response) => {
    return response.json();
  });

  return response;
}
