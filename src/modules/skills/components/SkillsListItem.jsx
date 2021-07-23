import Image from 'next/image';
import PropTypes from 'prop-types';

const SkillsListItem = ({ skill }) => {
  return (
    <li className="flex items-center gap-4 text-center">
      <Image
        loading="eager"
        width={28}
        height={28}
        src={`/brands/${skill.icon}`}
        alt={skill.text}
      />
      <span className="text-lg font-medium">{skill.text}</span>
    </li>
  );
};

SkillsListItem.propTypes = {
  skill: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default SkillsListItem;
