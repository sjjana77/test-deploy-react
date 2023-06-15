const HandleImageUpload = (event,currentblog,setcurrentblog,undo_check,setbloghistory) => {
    undo_check.current=2;
    const file = event.target.files[0];
    if (file) {
      const tempPath = URL.createObjectURL(file);
      console.log('Temporary path:', tempPath);
    
      const formData = new FormData();
      formData.append('image', file);
      setcurrentblog({
        id: currentblog.id,
        name: currentblog.name,
        topics: [
          { 
            id: currentblog.topics[0].id, name: currentblog.topics[0].name, keywords: [...currentblog.topics[0].keywords], tone:currentblog.topics[0].tone, content:currentblog.topics[0].content, img_path:tempPath
          }
        ]
      });
      setbloghistory((prev)=>[...prev,{tone:currentblog.topics[0].tone,content:currentblog.topics[0].content,img_path:tempPath}]);
  }
    // image uploading in server
    // fetch('http://localhost/test/upload.php', {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setcurrentblog({
    //       id: currentblog.id,
    //       name: currentblog.name,
    //       topics: [
    //         { 
    //           id: currentblog.topics[0].id, name: currentblog.topics[0].name, keywords: [...currentblog.topics[0].keywords], tone:currentblog.topics[0].tone, content:currentblog.content, img_path:data.newpath
    //         }
    //       ]
    //   })
    //   setbloghistory((prev)=>[...prev,{tone:currentblog.topics[0].tone,content:currentblog.topics[0].content,img_path:data.newpath}]);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    

  };

  export default HandleImageUpload;