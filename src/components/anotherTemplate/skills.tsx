import cntl from "cntl";

const classes = {
  container: cntl`
     grid grid-cols-1 
    `,
  skill: cntl`
      text-white text-sm font-regular
    `
};

export const SkillsTemplate = () => {
  return (
    <div className={classes.container}>
      <span className={classes.skill}>React</span>
      <span className={classes.skill}>React</span>
      <span className={classes.skill}>React</span>
      <span className={classes.skill}>React</span>
      <span className={classes.skill}>React</span>
      <span className={classes.skill}>React</span>
      <span className={classes.skill}>React</span>
      <span className={classes.skill}>React</span>
      <span className={classes.skill}>React</span>
      <span className={classes.skill}>React</span>
    </div>
  );
};
