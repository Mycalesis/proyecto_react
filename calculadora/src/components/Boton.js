export default function Boton({clickHandle, name}) {

    const handleClick = () => clickHandle(name)

    return (
        <div /*className={className.join(" ").trim()}*/>
            <button className="btn" onClick={handleClick}>{name}</button>
        </div>
        );
}