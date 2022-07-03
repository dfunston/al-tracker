import Image from "next/image";

export default function Ship(state) {
  return (
    <div className="ship">
      <div className="imgContainer">
        <Image src={state.ship.image} alt={state.ship.name} />
      </div>
      <div className="shipName">{state.name}</div>
      <div className="shipInfo">
        <span className="shipFaction">{state.faction}</span>
        <span className="shipClass">{state.class}</span>
      </div>
    </div>
  );
}
