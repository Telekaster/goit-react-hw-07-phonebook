export async function getContactsFetch() {
  let result;
  const response = await fetch(
    "https://61b2044cc8d4640017aaf12a.mockapi.io/contacts"
  ).then((response) => {
    //   console.log(response);
    return response.json();
  });

  console.log(response);

  return response;
}
