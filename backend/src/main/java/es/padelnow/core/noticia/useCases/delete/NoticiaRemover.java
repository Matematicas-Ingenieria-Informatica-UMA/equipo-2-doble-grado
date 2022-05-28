package es.padelnow.core.noticia.useCases.delete;

import es.padelnow.core.noticia.NoticiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoticiaRemover {
    private final NoticiaRepository repository;

    @Autowired
    public NoticiaRemover(NoticiaRepository repository) {
        this.repository = repository;
    }

    public void remove(Long Id){
        this.repository.deleteById(Id);
    }

}
