
import axios from 'axios';
import jwt_decode from 'jwt-decode'

const BASE_URL = "https://prime-video-clone.onrender.com/auth/v1"

export async function signup (name: String, email: String, password: String){
  const response = await axios.post(`${BASE_URL}/signup`,{
   name, email, password
  })
  // console.log(response.data)
  return response.data
}

export async function login(email: String,password: String){
  const response = await axios.post(`${BASE_URL}/login`,{
    email, password
  })
  localStorage.setItem('accessToken', response.data.accessToken)
  localStorage.setItem('refreshToken', response.data.refreshToken)
  console.log(response.data)
  return response.data
}

export function logout() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('watchlist');
  localStorage.removeItem('currentUser');
  }

export function getAccessToken() {
  return localStorage.getItem('accessToken');
  }
  
  export function getRefreshToken()  {
  return localStorage.getItem('refreshToken');
  }

  export function isAuthenticated(){
    const accessToken = getAccessToken()
    if(accessToken===null){
      return false
    }
    try {
      const {exp} = (jwt_decode(accessToken) as any)
      if(exp<Date.now()/1000){return false}
    } catch (error) {
      return false
    }
    return true
  }

  export async function refreshToken(refreshToken: String){
    try {
      const response = await axios.post(`${BASE_URL}/refresh_token`,{
        refreshToken : refreshToken
      })
      
      return response.data.accessToken
    } catch (error) {
      console.log((error as any).response.data.message)
    }
  }

export async function updateWatchlist(id: String,watchlist: any){
  const response = await axios.patch(`${BASE_URL}/users/${id}`,{
    watchlist
  })
  return response.data
}

export async function addToWatchlist(id:String, movie : any){
  const response = await axios.patch(`/${BASE_URL}/add/${id}`,{
    movie
  })
  return response.data
}

export async function removeFromWatchlist(id:String, movie : any){
  const response = await axios.patch(`/${BASE_URL}/remove/${id}`,{
    movie
  })
  return response.data
}