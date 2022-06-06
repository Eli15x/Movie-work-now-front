export async function validLogin(email, password) {
    const opts = {
      method: 'GET',
    }
  
    return fetch("http://localhost:1323/profile/email/"+email+"/password/"+password, opts).then((response) =>
      response.json(),
    )
  }
  