import { Paper } from './Paper';

type PropsType = {
  title: string;
  value: number | string;
  icon: string;
};

export const HomeDescription: React.FC<PropsType> = ({ title, value, icon }) => {
  return (
    <Paper className="flex">
      <div className="bg-indigo-600 p-3 rounded-lg mr-4">
        <img width={36} height={36} src={icon} alt="stat icon" />
      </div>
      <div>
        <span className="text-2xl font-bold">{title}</span>
        <p className="text-lg text-gray-500 font-medium">{value}</p>
      </div>
    </Paper>
  );
};
