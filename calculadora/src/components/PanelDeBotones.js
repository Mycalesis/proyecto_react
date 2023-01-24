import Button from "./Boton"

export default function PanelDeBotones({clickHandle}) {

    const handleClicK = nombreDeBoton => {clickHandle(nombreDeBoton)}

    return (
        <div>
            <div>
                <Button name ="AC " clickHandle={handleClicK}/>
                <Button name ="+/-" clickHandle={ handleClicK}/>
                <Button name ="%"clickHandle={handleClicK}/>
                <Button name ="/" clickHandle={handleClicK}/>
                
            </div>
            <div>
                <Button name ="9" clickHandle={handleClicK}/>
                <Button name ="8"clickHandle={handleClicK}/>
                <Button name ="7" clickHandle={handleClicK}/>
                <Button name ="x" clickHandle={handleClicK}/>
            </div>
            <div>
                <Button name ="6" clickHandle={handleClicK}/>
                <Button name ="5"clickHandle={handleClicK}/>
                <Button name ="4" clickHandle={handleClicK}/>
                <Button name ="-" clickHandle={handleClicK}/>
            </div>
            <div>
                <Button name ="3" clickHandle={handleClicK}/>
                <Button name ="2"clickHandle={handleClicK}/>
                <Button name ="1" clickHandle={handleClicK}/>
                <Button name ="+" clickHandle={handleClicK}/>
            </div>
            <div>
                <Button name ="0" clickHandle={handleClicK}/>
                <Button name ="."clickHandle={handleClicK}/>
                <Button name ="=" clickHandle={handleClicK}/>
            </div>
        </div>
    );
}