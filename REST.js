const endpoint = "http://localhost:3333";

async function getNames() {
  const response = await fetch(`${endpoint}/names`);
  const data = await response.json();

  return data;
}

export { getNames };
