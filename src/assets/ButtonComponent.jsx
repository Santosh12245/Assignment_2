import { BadgeX } from "lucide-react"



 export default function ButtonComponent(){

    return (
        <>
        <button id="button">HIT ME</button>
        </>
    )
 }

 // why to use CSS module

 // easy to manage style
 //no naming conflict


 function inLineStyleElement(){
     const styleObj = {
        backgroundColor : "blue",
        color:"blue"
     }

     return (
        <>
        <div style={styleObj}>stateMent</div>
        </>
     )
 }