import{ ref } from 'vue'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
      try {
        console.log('http://localhost:3300/posts/' + id)
        let data = await fetch('http://localhost:3300/posts/' + id)
        if (!data.ok) {
          throw Error('that post does not exist!')
        }
        post.value = await data.json()
      }
      catch (err) {
        error.value = err.message
      }
    } 
    return { post, error, load }
}

export default getPost