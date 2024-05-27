import React from 'react';

const ShowPhrase = ({randomPhrase}) => {


    const {phrase, author} = randomPhrase;

  return (
    <div className='app__container'>
        <p className='app__text'>{phrase}</p>
        <span className='app__author'>{author}</span>
    </div>
  )
}

export default ShowPhrase;



//igual se puede hacer asi ejemplo:
//'import React from 'react'const ShowPhrase = ({randomPhrase}) => {


   // const {phrase, autor} = randomPhrase

  //return (
    //<div>
      //  <p>{randomPhrase.phrase}</p>
        //<span>{}</span>
    //</div>
  //)
//}

// export default ShowPhrase