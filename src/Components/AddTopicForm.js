import React, {useState} from "react";
const AddTopicForm = ({ addTopic }) => {
    const [topicName, setTopicName] = useState('');
    const [keywords, setKeywords] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addTopic(topicName, keywords);
      setTopicName('');
      setKeywords('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Topic Name&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            value={topicName}
            onChange={(e) => setTopicName(e.target.value)}
          />
        </label> <br /><br />
        <label>
          Keywords (comma-separated)&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </label> <br /><br />
        <button type="submit">Add</button>
      </form>
    );
  };

export default AddTopicForm  