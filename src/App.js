import React, { useState, useEffect, useRef } from 'react';
import './App.css'
import Category from './Components/Category'
import Topics from './Components/Topcics'
import AddTopicForm from './Components/AddTopicForm'
import Editor from './Components/Editor'
import Blog from './Components/Blog';


const App = () => {
  const undo_check = useRef(2);
  const [viewblog, setviewblog] = useState({
    id: '',
    name: '',
    topics: [
      { 
        id: '', name:'', keywords: '', tone:'', content:'', img_path:''
      }
    ]
  });
  const [highesttopic,sethighesttopic] = useState(8);
  const [blog,setblog] = useState([
    {
      id:0,
      name: 'All',
      topics: []
    },
    {
      id:1,
      name: 'Custom',
      topics: [
        { 
          id: 1, name: 'Topic 1', keywords: ['keyword1', 'keyword2'], tone:'', content:'', img_path:''
        },
        { 
          id: 2, name: 'Topic 2', keywords: ['keyword3', 'keyword4'], tone:'', content:'', img_path:''
        },
      ]
    },
    {
      id:2,
      name: 'ICP',
      topics: [
        { 
          id: 3, name: 'Topic 3', keywords: ['keyword5', 'keyword6'], tone:'', content:'', img_path:''
        },
        { 
          id: 4, name: 'Topic 4', keywords: ['keyword7', 'keyword8'], tone:'', content:'', img_path:''
        },
      ]
    },
    {
      id:3,
      name: 'Mission',
      topics: [
        { 
          id: 5, name: 'Topic 5', keywords: ['keyword9', 'keyword10'], tone:'', content:'', img_path:''
        },
        { 
          id: 6, name: 'Topic 6', keywords: ['keyword11', 'keyword12'], tone:'', content:'', img_path:''
        },
      ]
    },
    {
      id:4,
      name: 'Product',
      topics: [
        { 
          id: 7, name: 'Topic 7', keywords: ['keyword13', 'keyword14'], tone:'', content:'', img_path:''
        },
        { 
          id: 8, name: 'Topic 8', keywords: ['keyword15', 'keyword16'], tone:'', content:'', img_path:''
        },
      ]
    }
  ]);
  const [currentblog,setcurrentblog] = useState({
    id: '',
    name: '',
    topics: [
      { 
        id: '', name: '', keywords: '', tone:'', content:'', img_path:''
      }
    ]
  });
  const [topics, setTopics] = useState([
    {
      name: 'All',
      topics: [],
    },
    {
      name: 'Custom',
      topics: [
        { id: 1, name: 'Topic 1', keywords: ['keyword1', 'keyword2'] },
        { id: 2, name: 'Topic 2', keywords: ['keyword3', 'keyword4'] },
      ],
    },
    {
      name: 'ICP',
      topics: [
        { id: 3, name: 'Topic 3', keywords: ['keyword5', 'keyword6'] },
        { id: 4, name: 'Topic 4', keywords: ['keyword7', 'keyword8'] },
      ],
    },
    {
      name: 'Mission',
      topics: [
        { id: 5, name: 'Topic 3', keywords: ['keyword9', 'keyword10'] },
        { id: 6, name: 'Topic 4', keywords: ['keyword11', 'keyword12'] },
      ],
    },
    {
      name: 'Product',
      topics: [
        { id: 7, name: 'Topic 3', keywords: ['keyword13', 'keyword14'] },
        { id: 8, name: 'Topic 4', keywords: ['keyword15', 'keyword16'] },
      ],
    },
  ]);


  const [displaytopic,setdisplaytopic] = useState(
    {
      category_id: "0",
      category_name: "All",
      category_topics: [...topics[1].topics,...topics[2].topics,...topics[3].topics,...topics[4].topics]
    }
  );


  const addTopic = (topicName, keywords) => {
    document.getElementById("add_form").classList="hidden modal";
    let a = topics[displaytopic.category_id].topics;
    a.push({id:highesttopic+1,name:topicName,keywords:keywords.split(',').map((keyword) => keyword.trim())});
    sethighesttopic(highesttopic+1);
    let b = [...topics];
    b[displaytopic.category_id].topics = a;
    setTopics(b);
  };
  
  const deleteTopic = (topicId) => {
    let a =topics.map((category) => ({
      ...category,
      topics: category.topics.filter((topic) => topic.id !== topicId),
    }))
    setTopics(a); 
    if(displaytopic.category_id==="0"){
      setdisplaytopic({...displaytopic,category_topics: [...a[1].topics,...a[2].topics,...a[3].topics,...a[4].topics]
      });
    }
    else{
        setdisplaytopic({...displaytopic,category_topics: a[displaytopic.category_id].topics
    });
    }


  };
  return (
    <div>
      {viewblog.id==="" ? 
          <div className='category overall'>
          <h1>Categories</h1>
          <Category setdisplaytopic={setdisplaytopic} topics={topics} deleteTopic={deleteTopic} />
          {Topics(displaytopic.category_id,displaytopic.category_name,displaytopic.category_topics,deleteTopic,setcurrentblog,setviewblog,blog)}
          <div id="add_form" className='hidden modal'>
            <div className='modal-content'>
            <h1>Add Topic<button onClick={()=>document.getElementById("add_form").classList="modal hidden"} id='close_addform'>Close</button></h1>
            <AddTopicForm addTopic={addTopic} />
            </div>
          </div>
          <Editor blog={blog} setblog={setblog} undo_check={undo_check} setcurrentblog={setcurrentblog} currentblog={currentblog} />
        </div>
        :
        <div className='blog overall'> <Blog viewblog={viewblog} setviewblog={setviewblog} />
        </div>
      }


    </div>
  );
};

export default App;
