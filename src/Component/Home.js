import React, { useEffect, useState } from 'react'
import axios from 'axios'
import video from "../assets/pexels-cottonbro-9665235 (1080p).mp4"
import ReactStars from 'react-stars'
import Topanime from './Topanime'
import Button from 'react-bootstrap/Button'
import Carousel1 from './Carousel'

function Home({ search }) {
 
  const [anime, setAnime] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://api.jikan.moe/v4/anime',
        headers: {
          'X-RapidAPI-Key': '4c70bb30f4mshbe346c7af8bcd28p15aacejsn315eec48d06b',
          'X-RapidAPI-Host': 'anime-streaming.p.rapidapi.com'
        }
      };
      const response = await axios.get("https://api.jikan.moe/v4/seasons/now");
      setAnime(response.data.data)
      console.log(response.data);
    }
    fetchData()
    
  }, [])
  console.log(anime)
  return (
    
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <video
        src={video}
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "100%", objectFit: "cover", position: "fixed", top: "0", left: "0", zIndex: "-1" }}
      />
      <div style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        top: "0",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        marginTop: "30px",
      }}>
        {search===""?<Carousel1/>:null}
        {anime.filter(e => search === "" ? e : e.title.toLowerCase().includes(search.toLowerCase())).map(e =>
          <div>
            <a href={`/detail/${e.mal_id}`} style={{ textDecoration: "none" }}>
              <div class="card" style={{ width: "250px", height: "600px", backgroundColor: "transparent" }}  >
                <img src={e.images.webp.large_image_url} width="400" height="300" class="card-img-top" alt="" />
                <div class="card-body" style={{ color: "Lavender", textAlign: "center", fontStyle: "italic" }}>
                  <h5 class="card-title" style={{ fontVariant: "small-caps", color: "CadetBlue" }} >{e.title}</h5>
                  <p>type: {e.type}</p>
                  <p>score: {e.score}</p>
                  <p>status: {e.status}</p>
                  <ReactStars
                    count={5}
                    value={e.score / 2}
                    size={24}
                    color2={'gold'} />
                </div>
              </div>
            </a>
            <Button variant="success" style={{ marginLeft: "40px" }} onClick={()=>{
            const list=JSON.parse(localStorage.getItem("list"))
            if(!list){
              localStorage.setItem('list', JSON.stringify([e]))
            }else{
            const x=list.find(el=>el.mal_id===e.mal_id)
            if(!x){
              localStorage.setItem("list",JSON.stringify([...list,e]))
              window.location.reload()
            }}
           }}>Add TO MyList</Button>          </div>
        )}
        <Topanime search={search} />
      </div>
    </div>
  )
}
export default Home;