import React from "react";
import { Card } from "../Card/Card";
import "./main.css";
import img from "../../assets/img/test-img.jpeg";

function Main(props)
{
  return (
    <main className="main__wrapper">
      <Card name="Morty Smith"
            img={img}
            status='alive'
            specie= "Human"
            dimension = "Earth">
        {props.children}
      </Card>
      <Card name="Morty Smith"
            img={img}
            status='alive'
            specie= "Human"
            dimension = "Earth">
        {props.children}
      </Card>
      <Card name="Morty Smith"
            img={img}
            status='alive'
            specie= "Human"
            dimension = "Earth">
        {props.children}
      </Card>
      <Card name="Morty Smith"
            img={img}
            status='alive'
            specie= "Human"
            dimension = "Earth">
        {props.children}
      </Card>
      <Card name="Morty Smith"
            img={img}
            status='alive'
            specie= "Human"
            dimension = "Earth">
        {props.children}
      </Card>
      
    </main>
  )
}

export { Main };