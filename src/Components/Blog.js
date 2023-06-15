import React from 'react'

function Blog({viewblog,setviewblog}) {
  const blog_details = viewblog.topics[0];
  return (
    <div className='overall'>
    <button id='goback' onClick={()=>{setviewblog({id: ''})}}>&larr; Go Back</button>
    <h1>{viewblog.name}</h1>
    <h3>{blog_details.name}</h3> 
<div class="grid-container">

  <div class="item1">{blog_details.content === "" ? "Empty Content..." : blog_details.content}</div>
  {blog_details.img_path !== '' ?  <div class="item2"><img src={blog_details.img_path} width="100%" /></div> : <></>}
 
</div>
    </div>
  )
}

export default Blog;