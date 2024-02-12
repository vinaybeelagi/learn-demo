import React from 'react'

export const Private = (propPrivate) => {

  console.log(propPrivate);
const addPrivate = (is_Public) => {
    propPrivate.addPrivate(is_Public);
}
  return (
    <div>
       {propPrivate.article.map((i)=><div key={i.id}>{i.title} </div>)}
       <button onClick={()=>addPrivate(false)}>Add Article</button>
    </div>
  )
}
