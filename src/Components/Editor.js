import React, {useState} from "react";
import Addblog from "./Addblog";
import HandleImageUpload from './HandleImageUpload'

const Editor = (props) => {
  const {setcurrentblog,currentblog,undo_check,blog,setblog} = props;
  const [bloghistory,setbloghistory] = useState([{
    tone:'',
    content:'',
    img_path:''
  },
  ]);

  function KeyPress(e) {
    var evtobj = window.e? e : e
    if (evtobj.keyCode == 90 && evtobj.ctrlKey){
      if(document.querySelector("#editor").classList.contains("hidden")==false){
        handleUndo();
      }
    }
  }
  document.onkeydown = KeyPress;

  const handleGenerate = () => {
  };



  const handleUndo = () => {
    if(bloghistory.length >1){
      let l;
      undo_check.current===1 ? l = (bloghistory.length-1)-undo_check.current : l = bloghistory.length-undo_check.current
    ;
    let tone,content,img_path;
    bloghistory[l].tone === undefined ?  tone = '' : tone = bloghistory[l].tone
    bloghistory[l].content === undefined ?  content = '' : content = bloghistory[l].content
    bloghistory[l].img_path === undefined ?  img_path = '' : img_path = bloghistory[l].img_path
    setcurrentblog({
      id: currentblog.id,
      name: currentblog.name,
      topics: [
        { 
          id: currentblog.topics[0].id, name: currentblog.topics[0].name, keywords: [...currentblog.topics[0].keywords], tone:tone, content:content, img_path:img_path
        }
      ]
  });
  let a=[...bloghistory];
  undo_check.current===2 ? a=a.slice(0,(a.length+1)-undo_check.current) : a=a.slice(0,a.length-undo_check.current)
  setbloghistory(a);
  undo_check.current=1;
}
  }
  
  return (
    <div id="editor" className='hidden modal'>
      <div className="modal-content">
      <h2>Editor<button onClick={()=>document.getElementById("editor").classList="modal hidden"} id='close_editor'>Close</button></h2> 
      <label>
        Tone&nbsp;&nbsp;&nbsp;
        <select value={currentblog.topics[0].tone} onChange={(e)=>{
          undo_check.current=2;
          setcurrentblog({
              id: currentblog.id,
              name: currentblog.name,
              topics: [
                { 
                  id: currentblog.topics[0].id, name: currentblog.topics[0].name, keywords: [...currentblog.topics[0].keywords], tone:e.target.value, content:currentblog.topics[0].content, img_path:currentblog.topics[0].img_path
                }
              ]
          })
          setbloghistory((prev)=>[...prev,{tone:e.target.value,content:currentblog.topics[0].content,img_path:currentblog.topics[0].img_path}]);
        }}>
          <option value="">Select a tone</option>
          <option value="formal">Formal</option>
          <option value="casual">Casual</option>
          <option value="informative">Informative</option>
        </select>
      </label> &nbsp;&nbsp;
      <button className="hidden" onClick={handleGenerate}>Generate</button>
      <br /><br />
      <label>
        Content&nbsp;&nbsp;&nbsp; 
        </label>
        <textarea
        value={currentblog.topics[0].content}
        onChange={(e)=>{
          undo_check.current=2;
          setcurrentblog({
              id: currentblog.id,
              name: currentblog.name,
              topics: [
                { 
                  id: currentblog.topics[0].id, name: currentblog.topics[0].name, keywords: [...currentblog.topics[0].keywords], tone:currentblog.topics[0].tone, content:e.target.value, img_path:currentblog.topics[0].img_path
                }
              ]
          })
          setbloghistory((prev)=>[...prev,{tone:currentblog.topics[0].tone,content:e.target.value,img_path:currentblog.topics[0].img_path}]);
        }}
      />  <br /><br />

      <label>
        Upload Image
        <input accept="image/*" id='upload_img' type="file" onChange={(e)=>HandleImageUpload(e,currentblog,setcurrentblog,undo_check,setbloghistory)} />
      </label>
      <br /><br />
      <button onClick={()=>{document.getElementById("editor").classList="hidden modal";Addblog(blog,setblog,currentblog)}}>Add</button>
      <button className="hidden" onClick={handleUndo}>Undo</button>
    </div>
    </div>
  );
};

export default Editor;