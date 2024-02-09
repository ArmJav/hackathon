import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const API_URL = 'https://hack.web-gen.ru:444/api/'

export const useGetStore = defineStore('getreq', () => {

    const lang_id = ref([])
    const search_lang = async (lang) => {
        try {
            let response = await axios.get(`${API_URL}/search/language?name=${lang}`);
            const aaa = response.data.data[0].id
            console.log(aaa);
            lang_id.value.push(aaa)
        } catch(err) {
        console.log(err.response);
        }
    }

    function $reset() {
        lang_id.value = []
      }  

    
       

  return {search_lang, lang_id, $reset,}
})
