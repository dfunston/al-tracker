import Ship from "./ship/ship";

export default function ShipList(state) {
  return (
    <div className="shipList">
      {state.ships.map((ship) => (
        <Ship key={ship.id} ship={ship} />
      ))}
    </div>
  );
}
