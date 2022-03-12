import React, { useEffect } from 'react';
import useBreakingBad from './hooks/useBreakingBad';
import useLang from './hooks/useLang';

function App() {

  const [{ data, loading }, { fetchData }] = useBreakingBad();
  const [, { __ }] = useLang();
  
  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>{__('HELLO_WORLD', 'Hello World')}</h1>
      {loading && <h3>Cargando...</h3>}
      {data && !loading && data.map( (el, index) => <h4 key={`mishuevos-${index}`}>{el.name}</h4>)}
    </div>
  );
}

export default App;