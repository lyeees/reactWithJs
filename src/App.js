import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import styles from "./App.module.scss"
// import { useState } from "react";

function App() {

  // const [user, setUser] = useState(
  //   {
  //     name : '',
  //     age : null
  //   }
  // );

  // const [listUser, setUserList] = useState([]);

  // // const handleClick = (e) => {
  // //   console.log(user);
  // //   e.preventDefault();
  // // }



  // function handleInput(e) {
  //   let value = e.target.value;
  //   let name = e.target.name;
  //   if(name === "age"){
  //     value = +value;
  //   }
  //   setUser({
  //     ...user,
  //     [name] : value,
  //   });

  // }

  // function handleClick(e) {
  //   e.preventDefault();
  //   const newUserList = [...listUser, {...user}]
  //   setUserList(newUserList);
  // } 

  // const handleInputAge =(e) => {
  //   const age = +e.target.value;
  //   setUser({
  //     name: user.name,
  //     age: age
  //   });
  // } 

  // return (

  //   <div className="d-flex flex-column justify-content align-items p-20">
  //     <form className="d-flex flex-column card p-20 ">
  //       <input name="name" onInput={handleInput} className="m-10 justify-content" type="text"/>
  //       <input name="age" onInput={handleInput} className="m-10" type="number"/>
  //       <button onClick={handleClick} className="btn btn-primary">Submit</button>
  //     </form>

  //     <ul className="d-flex flex-column card p-20">
  //       { listUser.map((u) => {
  //         return <li>{u.name}</li>}
  //       )}
  //     </ul>
    
  //   {console.log(listUser)}
      
return (
      <div className= {`d-flex flex-column ${styles.appContainer}`}>
        <Header/>
        <Content/>
        <Footer/>
      </div>
  );
}

export default App;
