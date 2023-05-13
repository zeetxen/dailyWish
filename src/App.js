import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import menu from "./components/data";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

const allCategories = ['all', ...new Set(menu.map((item)=>item.category))];
console.log(allCategories) 



function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories] = useState(allCategories);

const filterItems = (category)=>{
if(category === 'all'){
  setMenuItems(menu)
  return;
}
const newItems = menu.filter((item)=> item.category === category)
setMenuItems(newItems)
}



  return (
    <main>
      <section className="menu">
        <Title text={"our menu"} />
       <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
