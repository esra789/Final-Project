import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"

function AnimeDetail() {
    const { id } = useParams()

    console.log(id)
    const [anime, setAnime] = useState({})
    const [episodes, setEpisodes] = useState([])
    useEffect(async () => {
        await axios.get("https://api.jikan.moe/v4/anime/" + id + "/full").then(res => setAnime(res.data.data));
        await axios.get("https://api.jikan.moe/v4/anime/" + id + "/videos/episodes").then(res => setEpisodes(res.data.data));
    }, [])
    console.log(episodes)

    return (
        <div style={{ width: "100%", height: "150vh", backgroundColor: "black", display: "flex", flexDirection: "column" ,alignItems:"center"}}>
            <div class="card" style={{ width: "100%", backgroundColor: "black", display: "flex", flexDirection: "row" }}  >
                <div className='card-body' style={{ width: "20%", color: "white", fontStyle: "italic", color: "Lavender" }}>
                    <img src={anime?.images?.jpg?.image_url} width="500" height="500" class="card-img-top" alt="" />
                    <p>type: {anime.type}</p>
                    <p>episodes: {anime.episodes}</p>
                    <p>year: {anime.year}</p>
                    <p>season: {anime.season}</p>
                    <p>duration: {anime.duration} </p>
                    <p>rating: {anime.rating}</p>
                    <p>score: {anime.score}</p>
                    <p>status: {anime.status}</p>
                </div>
                <div class="card-body" style={{ color: "PapayaWhip", width: "50%", fontStyle: "inherit" }}>
                    <h3 class="card-title" style={{ fontVariant: "small-caps", color: "CadetBlue" }}>{anime.title}/{anime.title_japanese}</h3>
                    <p class="card-text">{anime.synopsis}</p>
                    <iframe src={anime?.trailer?.embed_url} width="700px" height="400px">
                    </iframe>
                </div>
             
            </div>
            <div style={{display:"flex"}}>
                <div className='animate1' style={{fontSize:"2rem",color:"purple",marginRight:"10px"}}><i className="fa-regular fa-hand-point-right"></i></div>
                <a className='episodes' href={anime.url+"/episode"} width="700px" height="400px" target='_blank' style={{fontSize:"2rem",borderRadius:"25%",borderColor:"white",color:"white",textDecoration:"none"}}>
             Episodes Link 
            </a>
                <div className='animate2' style={{fontSize:"2rem",color:"purple",marginLeft:"20px"}}><i className="fa-regular fa-hand-point-left"></i></div>
            </div>
            
        </div>
    )
}

export default AnimeDetail