import PropTypes from 'prop-types';

import SkillsListItem from '@/modules/skills/components/SkillsListItem';

const SkillsList = ({ skillsList }) => {
  return (
    <ul className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {skillsList.map((skill) => (
        <SkillsListItem key={skill.text} skill={skill} />
      ))}
    </ul>
  );
};

SkillsList.propTypes = {
  skillsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SkillsList;
