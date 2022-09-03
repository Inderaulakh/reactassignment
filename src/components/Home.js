import axios from "axios";
import React,{useEffect,useState} from "react";
import Card from "./Card";



export default function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get('https://api.facthunt.in/fostergem/v1/post/list/public')
    .then(resp => {
        console.log('respdata222',resp);
        setPost(resp.data.content)
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    })
},[]);
  if (!post) return null;

  return (
    <div>
        
      <div style={{"marginLeft":"250px"}}>
      <button className='btn btn-primary btn-l mt-4 mb-3'>Discover</button>
      <button class="btn btn-success " style={{"marginLeft":"900px"}}
                        type="submit">
                     +
                </button>
      <div className="row" >     
{

      post.map((item,i)=>{
        return (
         <>
          
            <div className="col-4" style={{marginBottom:"15px"}} >
              <Card img={item.coverImageUrl} title={item.title}  />
            </div>
         




         
         


        </>
        )
      })} 
      </div>
      </div>
      
    </div>
  );
}