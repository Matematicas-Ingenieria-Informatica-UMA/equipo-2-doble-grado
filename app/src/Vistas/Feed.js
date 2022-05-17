import React from "react";
import { Link } from "wouter";
import Miniatura from "../Componentes/Miniatura";
import Noticia from "../Componentes/Noticia";
import "../style/Feed.css";

export default function Feed() {
    return (
        <>
            <Noticia></Noticia>
            <div className="NoticiaSepHor"></div>
            <div className="MiniaturasRow">
                <Miniatura></Miniatura>
                <Miniatura></Miniatura>
                <Miniatura></Miniatura>
                <Miniatura></Miniatura>

                <Link to="/noticias">
                    <h4 className="VerMas">Ver más...</h4>
                </Link>
            </div>
            <div className="NoticiaSepHor"></div>
        </>
    );
}