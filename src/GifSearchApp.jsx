import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifSearchApp = () => {

  const [categories, setCategories] = useState([ 'Superman' ])

  const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return

    setCategories([ newCategory, ...categories ])
  }

  return (
    <>
      <h1>Gif Search App</h1>

      <AddCategory
        onNewCategory={ onAddCategory }
      />

      { 
        categories.map( item => (
          <GifGrid
            key={ item }
            category={ item }
          />
        ))
      }

    </>
  )
}
