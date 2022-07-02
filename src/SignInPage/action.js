const fetchAction = (action) => {
  const { endpoint, payload, verb } = action;

  const result = new Promise((resolve, reject) => {
    fetch(endpoint, {
      method: verb,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: payload,
    })
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => console.log("error: ", error));
  });
  return result;
};

const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URI = process.env.REACT_APP_BASE_URI;

export const SignIn = ({ email, password, callback }) => {
  return fetchAction({
    endpoint: `${BASE_URL + BASE_URI}/auth/login/`,
    verb: "POST",
    payload: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((res) => {
    callback(res)
  })
  .catch(res=> console.log(res));
};
