import axios from 'axios'

export async function validLogin(email, password) { 
  //request setting
  const data = JSON.stringify({ email, password });
  let headers = {
    'Content-Type': 'application/json',
  };

  //do request
  try{
    const response = await axios.post('http://localhost:1323/profile/valid', data, headers)
    return response.data
  }
  catch(err){
    console.log(err.message)
  }

  return ""
}
