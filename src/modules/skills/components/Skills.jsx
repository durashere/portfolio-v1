import { SKILLS } from '@/app/constants';
import SkillsList from '@/modules/skills/components/SkillsList';

const Skills = () => {
  return <SkillsList skillsList={SKILLS} />;
};

export default Skills;
