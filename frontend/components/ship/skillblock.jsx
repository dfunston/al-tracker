export default function skillblock(state) {
  return (
    <div className="shipSkills">
      {state.skills.map((skill) => (
        <div key={skill.id} className="shipSkill">
          <span className={"skillIcon skillColor" + skill.Color}>
            {skill.icon}
          </span>
          <span className={"skillName skillColor" + skill.Color}>
            {skill.name}
          </span>
          <span className={"skillDesc skillColor" + skill.Color}>
            {skill.desc}
          </span>
        </div>
      ))}
    </div>
  );
}
