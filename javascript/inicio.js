document.addEventListener('DOMContentLoaded', () => {
    const changeContentBtn = document.getElementById('changeContentBtn');
    const changeColorBtn = document.getElementById('changeColorBtn');
    const paragraphs = document.querySelectorAll('.text-container p');
    
    let contentChanged = false;
    let colorChanged = false;
    
    changeContentBtn.addEventListener('click', () => {
        if (contentChanged) {
            paragraphs[0].textContent = 'La educación es un pilar fundamental para el desarrollo de las sociedades, ya que fomenta el crecimiento personal y colectivo. A través de ella, las personas adquieren conocimientos, habilidades y valores que les permiten enfrentar los desafíos del mundo moderno. Además, la educación promueve el pensamiento crítico y la capacidad de adaptación, lo que resulta esencial en un entorno globalizado y en constante cambio.';
            paragraphs[1].textContent = 'Uno de los retos más importantes en el ámbito educativo es garantizar la equidad en el acceso a la educación de calidad. En muchas regiones del mundo, existen disparidades significativas entre diferentes grupos sociales y económicos, lo que perpetúa ciclos de pobreza y exclusión. Implementar políticas inclusivas y adaptar los sistemas educativos a las necesidades de cada comunidad es clave para lograr una mayor igualdad de oportunidades.';
            paragraphs[2].textContent = 'La integración de la tecnología en la educación ha transformado la manera en que aprendemos y enseñamos. Desde plataformas de aprendizaje en línea hasta el uso de herramientas digitales en el aula, la tecnología facilita el acceso a recursos educativos y personaliza la experiencia de los estudiantes. No obstante, es crucial que esta integración se haga de manera equilibrada, asegurando que todos los estudiantes puedan beneficiarse, independientemente de su contexto socioeconómico.';
        } else {
            paragraphs[0].textContent = 'Nuevo texto para el primer párrafo.';
            paragraphs[1].textContent = 'Nuevo texto para el segundo párrafo.';
            paragraphs[2].textContent = 'Nuevo texto para el tercer párrafo.';
        }
        contentChanged = !contentChanged;
    });
    
    changeColorBtn.addEventListener('click', () => {
        if (colorChanged) {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        } else {
            document.body.style.backgroundColor = '#282c34';
            document.body.style.color = '#ffffff';
        }
        colorChanged = !colorChanged;
    });
});