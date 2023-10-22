import React from 'react'


import Box from './box';


function App() {
  return (
<div> 
< Box title={'Shoes'} price={20}/>
< Box title={'Mobiles'} price={500} />
< Box title={'Clothes'} price={10} />
<Box/>
</div>
  );
}

export default App;
