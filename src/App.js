import React from "react";
import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";


const App = () =>(
  <>
    <h1 className="heading_style">List Of Top 3 Netflix Series</h1>

    {/* 
    <Card
      imgscr={Sdata[1].imgscr}
      sname={Sdata[1].sname}
      title="Netflix Original Series"
      links={Sdata[1].links} 
      />

    <Card
      imgscr="https://occ-0-64-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpg?r=608"
      sname="Stranger Things"
      title="Netflix Original Series"
      links="https://www.netflix.com/in/title/80100172?source=35" 
      /> */}

    {Sdata.map((val,index) => {
      console.log(index);
      return (
        <Card
          key= {val.id}
          imgscr={val.imgscr}
          sname={val.sname}
          title="Netflix Original Series"
          links={val.links}
        />
      )
    })}
  </>
)
export default App;