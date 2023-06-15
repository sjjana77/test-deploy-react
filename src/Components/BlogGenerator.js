import React, { useState } from 'react';

const BlogGenerator = () => {
  const [generatedBlog, setGeneratedBlog] = useState('');

  const handleGenerateBlog = async () => {
    try {
      const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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',
        },
        body: JSON.stringify({
          prompt: 'Write a blog post about...',
          max_tokens: 500, // Adjust the desired length of the generated content
        }),
      });

      const data = await response.json();
      setGeneratedBlog(data.choices[0].text);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={handleGenerateBlog}>Generate Blog</button>
      <div>
        <h2>Generated Blog:</h2>
        <p>{generatedBlog}</p>
      </div>
    </div>
  );
};

export default BlogGenerator;
