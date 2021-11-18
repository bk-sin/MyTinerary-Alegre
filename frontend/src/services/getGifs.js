
const apiKEY = 'JWNg20BaWq8E815KkCIR3Ee1QSlBseO2'


export default function getGifs ({keyword = 'error'} = {}) {
  
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
  
    return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data} = response
        if(Array.isArray(data)){
          const gifs = data.map(image => {
            const { images, title, id } = image
            const { url } = images.downsized_medium
            return { title, id ,url }
          })
          return gifs
        }
      })
}