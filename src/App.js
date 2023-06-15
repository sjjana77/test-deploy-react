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
          id: 1, name: 'The Best Travel Destinations for Adventure Enthusiasts: Exploring Nature Wonders', keywords: ['adventure', 'travel','nature ','exploration','hiking','outdoor activities'], tone:'', content:'', img_path:''
        },
        { 
          id: 2, name: 'Patagonia is a paradise for adventure travelers, with its dramatic mountains', keywords: ['Patagonia', 'Argentina','Chile','lakes'], tone:'', content:'', img_path:''
        },
      ]
    },
    {
      id:2,
      name: 'ICP',
      topics: [
        { 
          id: 3, name: 'ICPs are responsible for creating a wide range of digital content that users interests and preferences', keywords: ['Content', 'Curation','Creation'], tone:'', content:'', img_path:''
        },
        { 
          id: 4, name: 'ICPs excel at distributing digital content across various platforms', keywords: ['Distribution', 'Accessibility','CDNs','Fast'], tone:'', content:'', img_path:''
        },
      ]
    },
    {
      id:3,
      name: 'Mission',
      topics: [
        { 
          id: 5, name: 'ICPs understand the importance of user engagement and strive to create interactive experiences', keywords: ['Copyright', 'Protection','Instrumental','digital','innovation'], tone:'', content:'', img_path:''
        },
        { 
          id: 6, name: 'ICPs often rely on revenue streams such as advertising, subscriptions, or partnerships to support their content delivery efforts', keywords: ['Monetization', 'Revenue','high-quality'], tone:'', content:'', img_path:''
        },
      ]
    },
    {
      id:4,
      name: 'Product',
      topics: [
        { 
          id: 7, name: 'Gone are the days of traditional refrigerators. Smart refrigerators are equipped with advanced features', keywords: ['Smart Refrigerators', 'Intelligent Cooking Assistants'], tone:'', content:'', img_path:''
        },
        { 
          id: 8, name: 'Wi-Fi-enabled ovens and ranges bring a new level of convenience and control to your cooking process.', keywords: ['Wi-Fi-Enabled Ovens ', 'Smart Coffee Makers'], tone:'', content:'', img_path:''
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
        { id: 1, name: 'The Best Travel Destinations for Adventure Enthusiasts: Exploring Nature Wonders', keywords: ['adventure', 'travel','nature ','exploration','hiking','outdoor activities'] },
        { id: 2, name: 'Patagonia is a paradise for adventure travelers, with its dramatic mountains', keywords: ['Patagonia', 'Argentina','Chile','lakes'] },
      ],
    },
    {
      name: 'ICP',
      topics: [
        { id: 3, name: 'ICPs are responsible for creating a wide range of digital content that users interests and preferences', keywords: ['Content', 'Curation','Creation'] },
        { id: 4, name: 'ICPs excel at distributing digital content across various platforms', keywords: ['Distribution', 'Accessibility','CDNs','Fast'] },
      ],
    },
    {
      name: 'Mission',
      topics: [
        { id: 5, name: 'ICPs understand the importance of user engagement and strive to create interactive experiences', keywords: ['Copyright', 'Protection','Instrumental','digital','innovation'] },
        { id: 6, name: 'ICPs often rely on revenue streams such as advertising, subscriptions, or partnerships to support their content delivery efforts.', keywords: ['Monetization', 'Revenue','high-quality'] },
      ],
    },
    {
      name: 'Product',
      topics: [
        { id: 7, name: 'Gone are the days of traditional refrigerators. Smart refrigerators are equipped with advanced features', keywords: ['Smart Refrigerators', 'Intelligent Cooking Assistants'] },
        { id: 8, name: 'Wi-Fi-enabled ovens and ranges bring a new level of convenience and control to your cooking process.', keywords: ['Wi-Fi-Enabled Ovens ', 'Smart Coffee Makers'] },
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
