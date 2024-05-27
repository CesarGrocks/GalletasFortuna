import { useState } from 'react';
import './App.css';
import ShowButton from './components/ShowButton';
import ShowPhrase from './components/ShowPhrase';
import randomArr from './services/randomArr';
import arr from './utils/phrases.json';
import imagesArr from './utils/images.json';


function App() {

  const quote = randomArr(arr);
  const [randomPhrase, setRandomPhrase] = useState(quote);
  const photo = randomArr(imagesArr);
  const [image, setimage] = useState(photo);


  const appStyles = {
    backgroundImage: `url(../assets/fortuna-1/fondo${image}.jpg)`,
  }

  return (
    <div className='app' style={appStyles}>
      <h1 className='app__title'>Galletas de la fortuna</h1>
      <ShowButton
        setRandomPhrase={setRandomPhrase}
        setimage={setimage}
      />
      <ShowPhrase
        randomPhrase={randomPhrase}
      />
    </div>
  )
}

export default App;
