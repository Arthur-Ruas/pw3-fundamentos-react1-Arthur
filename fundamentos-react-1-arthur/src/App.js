import './App.css';
import CardBook from './components/CardBook/CardBook';

import cavernas_aco from './assets/livros/cavernas_aco.jpg'
import sol_desvelado from './assets/livros/sol_desvelado.jpg'
import robos_alvorada from './assets/livros/robos_alvorada.jpg'

function App() {

  const descricao = `As Cavernas de Aço, de Isaac Asimov, é o primeiro romance da consagrada Série dos Robôs, uma das mais populares da ficção científica. 
  A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário, inclusive nos dramas policiais. `

  return (
    <div className="App">
      <CardBook
      title="As Cavernas de Aço"
      author="Isaac Azimov"
      image={cavernas_aco}
      description={descricao}
      />

      <CardBook
        title="Sol Desvelado"
        author="Isaac Azimov"
        image={sol_desvelado}
        description={descricao}
      />

      <CardBook
        title="Robos da Alvorada"
        author="Isaac Azimov"
        image={robos_alvorada}
        description={descricao}
      />

    </div>
  );
}

export default App;
