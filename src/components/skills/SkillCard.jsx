/* eslint-disable react/prop-types */

function SkillCard({ image, children }) {
  return (
    <div className="flex w-max items-center gap-1 rounded-lg border border-white px-2 py-1 shadow-md shadow-purple-500">
      <img src={image} alt="" className="h-9 w-9 md:h-12 md:w-12" />
      <span className="font-semibold">{children}</span>
    </div>
  );
}

export default SkillCard;
