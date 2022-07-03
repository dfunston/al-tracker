export default function statblock(state) {
  return (
    <table className="shipStatBlock">
      <thead>
        <tr>
          <th>Level</th>
          <th>HP</th>
          <th>FP</th>
          <th>TRP</th>
          <th>AVI</th>
          <th>AA</th>
          <th>RLD</th>
          <th>EVA</th>
          <th>ARM</th>
          <th>SPD</th>
          <th>ACC</th>
          <th>LCK</th>
          <th>ASW</th>
          <th>COST</th>
        </tr>
      </thead>
      <tbody>
        {state.forEach((level) => {
          <tr>
            <td className="statLevel">{level.label}</td>
            <td>{level.hp}</td>
            <td>{level.fp}</td>
            <td>{level.trp}h</td>
            <td>{level.avi}</td>
            <td>{level.aa}</td>
            <td>{level.rld}</td>
            <td>{level.eva}</td>
            <td>{level.arm}</td>
            <td>{level.spd}</td>
            <td>{level.acc}</td>
            <td>{level.lck}</td>
            <td>{level.asw}</td>
            <td>{level.cost}</td>
          </tr>;
        })}
      </tbody>
    </table>
  );
}
