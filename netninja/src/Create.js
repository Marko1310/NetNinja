import React from "react";

const Create = () => {
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
        <label>Blog title:</label>
        <input type="text" required />
        <textarea required></textarea>
        <label>Blog author:</label>
        <select>
          <option value="marion">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
