import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifSearchApp = () => {

  const [categories, setCategories] = useState([ 'Superman', 'Batman' ])

  const onAddCategory = (newCategory) => {
    setCategories([ newCategory, ...categories ])
  }

  return (
    <>
      <h1>Gif Search App</h1>

      <AddCategory
        onNewCategory={ onAddCategory }
      />

      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        { categories.map( item => <li key={ item }>{item}</li>) }
      </ol>

    </>
  )
}
