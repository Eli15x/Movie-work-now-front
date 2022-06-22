import axios from 'axios'

export async function validLogin(email, password) { 

  const data = JSON.stringify({ email, password });
  let headers = {
    'Content-Type': 'application/json',
  };

  console.log(data)
  alert(data)
  return await axios.post('http://localhost:1323/profile/valid', data, headers)
}

export async function validLoginFetch(email,password){

  const data = JSON.stringify({ email, password });
  let headers = {
    'Content-Type': 'application/json'
  };

  const options = {
    method: 'POST',
    body:data,
    headers:headers,
  }
  
  const response = await fetch('http://localhost:1323/profile/valid', options);
  const json = await response.json();

  return json; 

}