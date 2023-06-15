const Addblog = (blog,setblog,currentblog)=>{
    let cblog_deatils='';
    let cblog_id='';
    let topic_index="a";
    for(let i=1;i<5;i++){
      cblog_id = i;
      cblog_deatils = blog[i].topics.filter((b,j)=>{
        if(b.id===currentblog.topics[0].id){
          topic_index = j;
        }
        return topic_index;
      });
      if(topic_index!="a"){
          break;
      }
    }
    cblog_deatils = [...blog];
    cblog_deatils[cblog_id].topics[topic_index] = currentblog.topics[0];
    setblog(cblog_deatils);
  }

  export default Addblog;