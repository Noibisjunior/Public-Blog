import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import Editor from './Editor';
import './create.css';

const Create = () => {
  const [redirect, setRedirect] = useState(false);
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
  });
  const { title, summary } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const Navigate = useNavigate();

  async function createNewPost(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:5000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, summary, content }),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);

    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <form onSubmit={createNewPost}>
      <>
        <input
          className="title"
          type="text"
          name="title"
          placeholder={'Title'}
          value={title}
          onChange={onChange}
          required
        />

        <input
          className="summary"
          name="summary"
          placeholder={'summary'}
          value={summary}
          onChange={onChange}
          required
        />
        <input type="file" onChange={(e)=>setFiles(e.target.files)}  />
        <Editor onChange={setContent} value={content} required />
        <button className="btn">
          Create Post
        </button>
      </>
    </form>
  );
};

export default Create;

// import React from 'react';
// import './create.css';
// // import { IoIosAddCircleOutline } from 'react-icons/io';

//  const Create = () => {
//   return (
//     <>
//       <section className="newPost">
//         <div className="container boxItems">
//           <div className="img ">
//             <img
//               src="https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               alt="img"
//               class="image-preview"
//             />
//           </div>
//           <form>
//             <div className="inputfile flexCenter">
//               <input type="file" accept="image/*" alt="img" />
//             </div>
//             <input type="text" placeholder="Title" />

//             <textarea name="" id="" cols="30" rows="10"></textarea>

//             <button className="button">Create Post</button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Create;
// const data = new FormData()
// data.set('title',title)
// data.set('summary',summary)
// // data.set('content',content)
// data.set('file',files[0])
