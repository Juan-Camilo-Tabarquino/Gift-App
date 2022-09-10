import React, {useState} from 'react'
import AddCategory from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'

export function GiftExpertApp() {

    const [categories, setCategories] = useState(['One punch'])

  return (
   <>   
        <h1>GiftExpertApp</h1>
        <hr />

        <AddCategory setCategories={setCategories}/>

        <ol>
            { categories.map(category => 
            
                <GiftGrid key={category} category={category}/>

             )}
        </ol>

   </>
  )
}
