import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { Link } from 'react-router-dom'
import axios from 'axios'
import video from "../assets/pexels-cottonbro-9665235 (1080p).mp4"
import Button from 'react-bootstrap/Button'
function Topanime({ search }) {
  const [anime, setAnime] = useState([])
  const add = () => {
    setAnime()}
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
      const response = await axios.get("https://api.jikan.moe/v4/top/anime");
      setAnime(response.data.data)
      console.log(response.data);
    }
    fetchData()
  }, [])
  console.log(anime)
  return (
    <div>
      <div style={{
        width: "100%",
        height: "100%",
        display: "flex",

        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        marginTop: "30px"
      }}>
        <video
          src={video}
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover", position: "fixed", top: "0", left: "0", zIndex: "-1" }}
        />
        {anime.filter(e => search === "" ? e : e.title.includes(search)).map(e =>
          <div>
          <Link to={`/detail/${e.mal_id}`} style={{ textDecoration: "none" }}>
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
          </Link>
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
           }}>Add To MyList</Button>
          </div>
        )}</div>
    </div>)
}
export default Topanime