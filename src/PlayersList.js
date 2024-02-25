import React from 'react'
import Players from './PL.js';
 const PlayersList = () =>{
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
   {Players.map((p) => <Players key={p.id} player={p} />
    
   )}
  </div>

  )
}

export default PlayersList
