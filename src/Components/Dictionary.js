import React from 'react'

export default function Dictionary(props) {

  let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  // hooks

  

  // functions
  
  const handleChange = (e) => {
    props.setWord(e.target.value);
  }

  const getDataAPI = () => {
    url += props.word;
    fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      props.setDictData(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err, "Here");
    })
  }


  

  return (
    <>
    <div className='bg-zinc-300 flex items-center flex-row justify-center py-3 md:py-5'>
      <input 
      type='text' 
      className='w-3/5 px-5 py-1 rounded-md mx-2 md:w-3/12' 
      placeholder='Enter the word'
      value={props.word} 
      onChange={handleChange}/>
      <button className='bg-zinc-500 text-white w-28 py-1 rounded-xl hover:bg-slate-700' onClick={getDataAPI}>Search</button>
    </div>
    {props.dictData && <div className='w-[95%] bg-slate-400 mx-auto my-4 p-5 rounded-xl md:w-[75%]'>
      <h1 className='text-5xl'>{props.dictData[0].word}</h1>
      <div className='flex flex-row justify-start items-center my-3'>
        <h2 className='text-2xl text-gray-500'>{props.dictData[0].phonetic}</h2>
        <h2 className='text-2xl text-gray-700 mx-3'>{props.dictData[0].meanings[0].partOfSpeech}</h2>
      </div>

      {/* div for defintion */}
      <div className='bg-slate-200 shadow-inner rounded-2xl p-5'>
        <h1 className='text-3xl font-bold'>Definitions</h1>
        {props.dictData && props.dictData.length > 0 && props.dictData[0].meanings.map((defs, idx1) => (
          defs.definitions.map((elem, idx2) => (
            <h3 className='text-base my-1'key={`${idx1}-${idx2}`}>&#8226; {elem.definition}</h3>
          ))
        ))}
      </div>

      {props.dictData[0].meanings[0].synonyms && <div className='bg-slate-300 shadow-slate-800 rounded-2xl my-5 p-5'>
        <h1 className='text-3xl font-bold mb-3'>Synonyms</h1>
          {props.dictData[0].meanings[0].synonyms.map((elem, idx) => {
            return <p key={idx}>{elem},</p>
          })}
      </div>}

      {props.dictData[0].meanings[0].antonyms && <div className='bg-slate-300 shadow-slate-800 rounded-2xl my-5 p-5'>
        <h1 className='text-3xl font-bold mb-3'>Antonyms</h1>
          {props.dictData[0].meanings[0].antonyms.map((elem, idx) => {
            return <p key={idx}>{elem},</p>
          })}
      </div>}

    </div>}
    </>
  )
}
