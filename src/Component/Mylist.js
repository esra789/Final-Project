import { Link } from "react-router-dom"
import video from "../assets/pexels-cottonbro-9665235 (1080p).mp4"
import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import Button from 'react-bootstrap/Button'
function Mylist() {
    const [anime, setAnime] = useState([])
    useEffect(() => {
      const list=JSON.parse(localStorage.getItem("list"))
      if (!list) {
        setAnime([])
      }else{
        setAnime(list) 
      }
       
      
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
                {anime.map(e =>
          <div>
            <Link to={`/detail/${e.mal_id}`} style={{ textDecoration: "none" }}>
              <div class="card" style={{ width: "250px", height: "650px", backgroundColor: "transparent" }}  >
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
          <Button variant="danger" onClick={()=>{
             const list=JSON.parse(localStorage.getItem("list"))
             const x=list.find(el=>el.mal_id===e.mal_id)
             if(x){
                setAnime(list.filter((item)=> item.mal_id!==x.mal_id))
               localStorage.setItem("list",JSON.stringify(list.filter((item)=> item.mal_id!==x.mal_id)))
               window.location.reload()
             }
          }}>Remove From List</Button>
          </div>
        )}
            </div>
        </div>
    )
}
export default Mylist;