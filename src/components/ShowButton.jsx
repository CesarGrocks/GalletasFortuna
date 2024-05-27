import React from 'react';
import arr from '../utils/phrases.json';
import randomArr from '../services/randomArr';
import imagesArr from '../utils/images.json';

const ShowButton = ({setRandomPhrase, setimage}) => {

    const handleClick = () => {
        const quote = randomArr(arr);
        setRandomPhrase(quote);
        const photo = randomArr(imagesArr);
        setimage(photo);
    }

    return (
        <button onClick={handleClick} className='app__btn'>Probar mi suerte</button>
    )
}

export default ShowButton;