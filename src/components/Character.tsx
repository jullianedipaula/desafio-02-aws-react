import { useRef } from "react";

export default function Character(props){

    const handleBgColorOn = ()=>{
         const elem = document.getElementById(`bottom-character-bg-${props.characterId}`);
         if(elem){
            let currentClassName = elem.className;
            elem.classList.remove("bg-tertiary");
            elem.classList.add("bg-secondary");
            currentClassName = elem.className;
         }
        
    }

    const handleBgColorOff = ()=>{
        const elem = document.getElementById(`bottom-character-bg-${props.characterId}`);
        if(elem){
           let currentClassName = elem.className;
           elem.classList.remove("bg-secondary");
           elem.classList.add("bg-tertiary");
        }
       
   }

    return (
        <div 
            className="hover:bg-secondary">

            <img 
                className="w-64 h-72" 
                src={props.urlImage} 
                alt={props.imageDescription} 
                onMouseOver={handleBgColorOn}
                onMouseOut={handleBgColorOff}/>

            <hr 
                className="bg-secondary h-2 w-64" 
                onMouseOver={handleBgColorOn} 
                onMouseOut={handleBgColorOff}/>

            <div 
                id={`bottom-character-bg-${props.characterId}`} 
                className="w-64 h-52 bg-tertiary rounded-br-md hover:bg-secondary">
                    
                <h4 className="text-gray-light pt-3 pl-3">{props.name}</h4>
            </div>
        </div>
    );
}