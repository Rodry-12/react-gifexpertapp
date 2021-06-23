import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setcategories] = useState(['goku']);

    /*
    const handleAdd = () =>{
        setcategories( [...categories, 'HunterX'] );
        //setcategories( cats => [...cats,'HunterX'] );
    }
    */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setcategories }/>
            <hr/>

            <ol>
                {
                    categories.map(category =>{
                        return <GifGrid 
                                key = {category}
                                category = {category}/>
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp;