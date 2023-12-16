import React from 'react'
import { doGet } from './servis'
import { useState } from 'react'
import { useEffect } from 'react'

const Posts = ({history}) => {

  const [Posts, setPosts] = useState([])

  async function getPosts() {
    await doGet('/posts').then((res) => setPosts(res.data))
  }




  useEffect(() => {
    getPosts()
  }, [])

  var OpenOnePost = (id) => {
    history.push('/posts/' + id)
  }
  return (


    <div className="row">
      <h2 className='text-center text-light my-5'>Posts</h2>
      {
        Posts.map((item, index) => <div key={index} className='col-3' >
          <div className="card my-2" onClick={() => OpenOnePost(item. id)}>
            <div className="card-header">
              {item.id}.  {item.title}
            </div>
            <div className="card-body">
              {item.body}
            </div>
          </div>
        </div>)
      }
    </div>





  )
}

export default Posts