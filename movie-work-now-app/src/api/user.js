export async function validLogin(email, password) {
    const opts = {
      method: 'GET',
    }
  
    return fetch(process.env.REACT_APP_URL_API.concat('/profile/email/'+email+'/password/'+password), opts).then((response) =>
      response.json(),
    )
  }
  