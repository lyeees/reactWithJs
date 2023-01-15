import styles from "./Recipe.module.scss"
import {useState} from 'react'
// import image from "../assets/images/image1.jpg"

function Recipe({title, image}) {

    const [liked, setLiked] = useState(false);

    const handleClickRecipe = () => {
        setLiked(!liked)
    }

    return (
        <div onClick={handleClickRecipe} className = {styles.recipe}>
            <div className = {styles.imageContainer}>
                <img src = {image} alt = "recette"/>
            </div>
            <div className = { `d-flex flex-column ${styles.title}`}>
                <h3 className="m-10-t">{ title }</h3>
                <i className= { `fa-solid fa-heart m-10 ${liked ? 'text-primary' : ""} ` }></i>
            </div>
        </div>
    );
}

export default Recipe;