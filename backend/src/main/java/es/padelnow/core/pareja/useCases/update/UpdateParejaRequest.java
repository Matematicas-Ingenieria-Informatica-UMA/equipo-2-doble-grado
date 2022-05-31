package es.padelnow.core.pareja.useCases.update;

import es.padelnow.core.jugador.Jugador;
import es.padelnow.core.partido.Partido;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import java.util.Collection;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class UpdateParejaRequest {

    private int temporadas_activo;

    private String entrenador;

    private Collection<Partido> partidos;

    private Collection<Jugador> jugadores;


}