const Topics = (category_id, category_name, category_topics,deleteTopic,setcurrentblog,setviewblog,blog) => {
  const  ViewBlog = (categoryy,content,category_details)=>{
    setviewblog({
      id: category_details.id,
      name: category_details.name,
      topics: [
        { 
          id: content.id, name:content.name, keywords: content.keywords, tone:content.tone, content:content.content, img_path:content.img_path
        }
      ]
    });
    }
    return (
      <div className='topics'><span className='recommend'>Recommended Topics</span> <br /><br />
      {
        category_topics.map((categoryy) => {
          
          return(
            <div id={categoryy.id} className='topics'>
              <div id={categoryy.id} className='topics_heading'>{categoryy.name}</div><br />
              <span className='delete-span'><button className='delete-btn' onClick={() => deleteTopic(categoryy.id)}>Delete &gt;</button></span>
              <span className='write-span'><button onClick={()=>
              {
                document.getElementById("editor").classList.remove("hidden");
                setcurrentblog({
                  id: category_id,
                  name: category_name,
                  topics: [
                    { 
                      id: categoryy.id, name: categoryy.name, keywords: categoryy.keywords, tone:'', content:'', img_path:''
                    }
                  ]
                })
              }
            } className='write-btn' >Write &gt;</button> </span>
              <div className='topics_keywords'>
              {typeof(categoryy.keywords)==="string" ? <span className='keywords yellow'>{categoryy.keywords}</span> : 
              categoryy.keywords.map((keywords,i)=>(
              <span>
                {i%2===0 ? <span className='keywords yellow'>{keywords}</span> : <span className='keywords red'>{keywords}</span>} 
              
              </span>
              ))}
               </div>
               <span><button className="blog-btn" onClick={()=>{
                  for(let i=1;i<5;i++){
                    blog[i].topics.map((content,index)=>{
                      if(categoryy.id===content.id){
                        ViewBlog(categoryy,content,blog[i]);
                      }
                    });
                  }


               }}>View Blog &gt;</button></span>
            </div>
          )
        })
      }
      </div>
    );
  };

export default Topics;