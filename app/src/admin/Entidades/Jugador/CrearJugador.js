import React from "react";
import { Link } from "wouter";

import "../../style/CrearRecurso.css";
import "../../../user/style/Global.css";

export default function CrearJugador() {
  return (
    <div className="CreaRecursoCard">
      <h1 className="CenterAlign">Rellene los datos del jugador</h1>

      <div className="IncidenciaTop">
        <div className="InputStyle DataInput">
          <img src="/Profile.svg" alt="Profile" />
          <input required type="text" id="Name" placeholder="Nombre" />
        </div>
        <div className="InputStyle DataInput">
          <input required type="text" id="Surnames" placeholder="Apellidos" />
        </div>
      </div>
      <div className="IncidenciaTop">
        <div className="InputStyle DateInput">
          <p className="m-0">Fecha de Nacimiento</p>
          <input required type="date" id="Birth" placeholder="Nacimiento" />
        </div>
        <select
          required
          name="Gender"
          id="Gender"
          className="DesplegableRecurso"
        >
          <option disabled selected>
            Selecciona el género
          </option>

          <option>Masculino</option>

          <option>Femenino</option>
        </select>
      </div>
      <div className="IncidenciaTop">
        <div className="InputStyle DataInput">
          <input
            required
            type="text"
            id="Nationality"
            placeholder="Nacionalidad"
          />
        </div>
        <div className="InputStyle DataInput">
          <input required type="text" id="City" placeholder="Ciudad" />
        </div>
      </div>
      <div className="IncidenciaTop">
        <select name="Dominant" id="Dominant" className="DesplegableRecurso">
          <option disabled selected>
            Selecciona el brazo dominante
          </option>

          <option>Diestro</option>

          <option>Zurdo</option>
        </select>
        <div className="InputStyle DataInput">
          <input
            required
            type="text"
            id="PhotoURL"
            placeholder="URL de la foto"
          />
        </div>
      </div>
      <div className="IncidenciaTop">
        <div className="InputStyle DataInput">
          <input required type="text" id="Mean" placeholder="Media" />
        </div>
        <select name="Position" id="Position" className="DesplegableRecurso">
          <option disabled selected>
            Selecciona la posición
          </option>

          <option>Revés</option>

          <option>Derecha</option>
        </select>
      </div>
      <button className="BotonConFondo">Crear Jugador</button>
      <Link to="/admin/recursos/jugadores">
        <button className="SimpleButton">Cancelar</button>
      </Link>
    </div>
  );
}