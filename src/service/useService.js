const BASE_URL = import.meta.env.VITE_API_URL;

export async function loginApi({ email, password }) {
  const res = await fetch(`${BASE_URL}login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
      password: password
    }),
  });

  if (!res.ok) {
    throw new Error('Não foi possivel efeutar o login. Revise suas credenciais.');
  }

  return res.json();
}

export const registeApi = async ({ name, email, password }) => {
  const res = await fetch(`${BASE_URL}register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
    })
  })

  if (!res.ok) {
    throw new Error('Erro na requisição');
  }

  return res.json();

}

export const recoverPasswordApi = async ({ email }) => {
  const res = await fetch(`${BASE_URL}recover`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  const responseText = await res.text();

  if (!res.ok) {
    throw new Error(responseText || 'Erro durante a requisição.');
  }

  return responseText;
};

