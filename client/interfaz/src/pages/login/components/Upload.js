import { useState } from "react"; 
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"; 
import { storage } from "./firebase";


function Upload() { 
  const [progress, setProgress] = useState(0); 
    const formHandler = (e) => { 
      e.preventDefault(); 
      const file = e.target[0].files[0]; 
      //uploadFiles(file);
    }; 
   
    const uploadFiles = (file) => { 
      // 
      if (!file) return; 
      const sotrageRef = ref(storage, `files/${file.name}`); 
      const uploadTask = uploadBytesResumable(sotrageRef, file); 
   
      uploadTask.on( 
        "state_changed", 
        (snapshot) => { 
          const prog = Math.round( 
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100 
          ); 
          setProgress(prog); 
        }, 
        (error) => console.log(error), 
        () => { 
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => { 
            console.log("File available at", downloadURL); 
          }); 
        } 
      ); 
    };    
   
    return ( 
      <div className="Upload"> 
        <form onSubmit={formHandler}> 
          <input type="file" className="uploading"/> 
          <button className='btn'>
                            Buscar
                            </button>
          <button type="submit">Up12331</button> 
        </form> 
        <hr /> 
        <h2>Uploading done {progress}%</h2> 
      </div> 
    );
  } 
  
  export default Upload; 
  