import { Paper } from './Paper';

type ProfileStatItemPropsType = {
  title: string;
  value: number | string;
  icon: string;
};

export const ProfileStatItem: React.FC<ProfileStatItemPropsType> = ({ title, value, icon }) => {
  return (
    <Paper className="flex">
      <div className="bg-indigo-600 p-3 rounded-lg mr-4">
        <img width={36} height={36} src={icon} alt="stat icon" />
      </div>
      <div>
        <span className="text-lg text-gray-500 font-medium">{title}</span>
        <p className="text-3xl font-bold">{value}</p>
      </div>
    </Paper>
  );
};

export const ProfileStatItemPreloader = () => {
  return (
    <div className="p-4 rounded-md shadow-sm bg-white w-full flex">
      <div className={`bg-gray-300 animate-pulse mr-4 rounded-lg w-16 h-16 `}></div>
      <div className="w-3/5">
        <div className={`bg-gray-300 animate-pulse rounded-lg w-full h-6 mb-3`}></div>
        <div className={`bg-gray-300 animate-pulse rounded-lg w-3/5 h-7`}></div>
      </div>
    </div>
  );
};
