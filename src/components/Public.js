import React from 'react'

export const Public = ({article, title, addPublic}) => {

  

  return (
    <div>
       {article.map((i)=><div key={i.id}>{i.title} </div>)}
       <button onClick={()=>addPublic(true)}>Add Article</button>
    </div>
  )
}
