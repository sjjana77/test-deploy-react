const selectedClass =(e)=>{
    if(document.querySelector(".selected-category")!==undefined && document.querySelector(".selected-category")!==null){
      document.querySelector(".selected-category").classList.remove("selected-category");
      document.querySelector("#"+e.target.id).classList+="selected-category";
    }
  }

const Category = ({topics,setdisplaytopic})=>{
    return (
      <div className='categories'>
        <span className='selected-category' onClick={(e)=>{setdisplaytopic(
          {
            category_id: "0",
            category_name: "All",
            category_topics: [...topics[1].topics,...topics[2].topics,...topics[3].topics,...topics[4].topics]
          }
        );
        selectedClass(e);
        }} id='All'>All</span>
        <span onClick={(e)=>{setdisplaytopic(
          {
            category_id: "1",
            category_name: "Custom",
            category_topics: topics[1].topics
          }
        );
        selectedClass(e);
        document.getElementById("open_add_dialog").classList.remove("hidden");
        }}  id='Custom'>Custom</span>
        <span onClick={(e)=>{setdisplaytopic(
          {
            category_id: "2",
            category_name: "ICP",
            category_topics: topics[2].topics
          }
        );
        selectedClass(e);
        document.getElementById("open_add_dialog").classList.remove("hidden");
        }}  id='ICP'>ICP</span>
        <span onClick={(e)=>{setdisplaytopic(
          {
            category_id: "3",
            category_name: "Mission",
            category_topics: topics[3].topics
          }
        );
        selectedClass(e);
        document.getElementById("open_add_dialog").classList.remove("hidden");
        }}  id='Mission'>Mission</span>
        <span onClick={(e)=>{setdisplaytopic(
          {
            category_id: "4",
            category_name: "Product",
            category_topics: topics[4].topics
          }
        );
        selectedClass(e);
        document.getElementById("open_add_dialog").classList.remove("hidden");
        }}  id='Product'>Product</span>
        <button className="hidden" onClick={()=>document.getElementById("add_form").classList.remove("hidden")} id='open_add_dialog'>Add Topic &gt;</button>
      </div>
    )
    }

export default Category;