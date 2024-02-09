import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const API_URL = 'https://hack.web-gen.ru:444/api/'

export const useAuthStore = defineStore('auth', () => {
  
  const singup = async (payload) => {
    try {
      let response = await axios.post(`${API_URL}/reg/command`, {
        ...payload
      });

      console.log(response.data)
    } catch(err) {
      console.log(err.response);
    }
  }

  const certs = async (payload, name_team) => {

    try {
      let response = await axios.post(`${API_URL}/reg/command/certs`,{
        name: name_team,
        payload
      },
      {
        headers:{ "Content-Type":'multipart/form-data'}
      })

      console.log(response.data)
    } catch(err) {
      console.log(err.response);
    }
  }

  return { singup, certs}
})
