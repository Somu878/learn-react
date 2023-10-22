import React from 'react'
import Footer from './Foot';
import Box from './box';


function App() {
  return (
<div> 
< Box title={'Shoes'} price={20}/>
< Box title={'Mobiles'} price={500} />
< Box title={'Clothes'} price={10} />
<Footer/>
</div>
  );
}

export default App;
