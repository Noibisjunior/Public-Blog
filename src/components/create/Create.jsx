import React ,{useState}from 'react'
// import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import Editor from './Editor'
 import './create.css';


const Create = () => {
    const [title,setTitle] = useState('')
    const [summary,setSummary] = useState('')
    const [content,setContent] = useState('')
    const [files,setFiles] = useState('')
    // const [redirect,setRedirect] = useState(false)
    
    

// async function createNewPost(ev){
// const data = new FormData()
// data.set('title',title)
// data.set('summary',summary)
// data.set('content',content)
// data.set('file',files[0])

// ev.preventDefault()
// // console.log(files);
// }
  return (
    // <form onSubmit={createNewPost}>
    
    <>
      <input
      className='title'
        type="title"
        placeholder={'Title'}
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      
      <input
      className='summary'
        type="summary"
        placeholder={'summary'}
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      />
      <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
      <Editor onChange={setContent} value={content} />
      <button className='btn'  style={{ marginTop: '10px' }}>Create Post</button>
      </>
    // </form>
  );
}

export default Create














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