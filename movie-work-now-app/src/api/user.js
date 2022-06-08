import axios from 'axios'

export async function validLogin(email, password) { 

  const data = JSON.stringify({ email, password });
  let headers = {
    'Content-Type': 'application/json;charset=UTF-8',
  };

  const response = await axios.post('http://localhost:1323/profile/valid', data, headers);

  return response

}


  
