import styles from "./Content.module.scss";
import Recipe from "./Recipe";
import { data } from "../data/recipes";
import { useState } from "react";

function Content() {

    const [filtre, setFiltre] = useState("")

    function handleInput(e) {
        const filtre = e.target.value;
        console.log(e)
        console.log("CLICKKKKKK")
        console.log("CLICKKKKKK")
        setFiltre(filtre);
    }

    return ( 
        <div className=" flex-fill container p-20">
            <h1 className="animate__animated animate__bounce m-20-b m-20-t"> Découvrir nos nouvelles recettes !</h1>
            <div className={ `card p-20 ${styles.contentCard} `}>
                <div className={ ` d-flex align-items justify-content ${styles.barRecherche} ` }>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input onInput={handleInput} type="texte" placeholder=" Rechercher " className="flex-fill"></input>
                </div>
                <div className={`${styles.grid }`}>
                    {   data.filter(r =>  r.title.toLowerCase().startsWith(filtre.trim().toLowerCase()))
                            .map(recipe => (<Recipe key={recipe._id} title={recipe.title} image={recipe.image} />)) }
                </div>
            </div>
        </div> 
    );
}

export default Content;