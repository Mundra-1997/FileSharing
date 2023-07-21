import {useRef, useState,useEffect} from 'react'
import './App.css';
import { uploadFile } from './services/api';



function App() {
    const[file,setFile] = useState("");
    const [result,setResult] = useState();
  const ref = useRef();
  const img = `https://img.freepik.com/premium-vector/file-sharing-flat-icon-color-simple-element-from-work-from-home-collection-creative-file-sharing-icon-web-design-templates-infographics-more_676904-2374.jpg`;
  const onUploadClick=()=>{
    ref.current.click();
  }
  useEffect(()=>{
       const getImage =async ()=>{
           if(file){
            const data = new FormData();
            data.append("name",file.name);
            data.append("file",file);
            let response = await uploadFile(data);
            console.log(response);
            setResult(response.path);
           }
       }
       getImage();
  },[file])
  return (
    <div className="container">
     
      <img src={img} alt="something went wrong"></img>
    
     <div className="wrapper">
      <h1>File Sharing</h1>
      <p>Upload and Share the download link</p>
       <button onClick={()=>onUploadClick()}>upload</button>
       <input type="file" ref={ref} style={{display:'none'}}
       onChange={(e)=>setFile(e.target.files[0])}></input>

       <a href={result} target="_blank">{result}</a>
     </div>
    </div>
  );
}

export default App;
