import React from 'react';
import uploadIcon from 'assets/upload.svg';
import lessonIcon from 'assets/lesson.svg';
import topSpeedIcon from 'assets/topSpeed.svg';
import avgSeedIcon from 'assets/avgSpeed.svg';
import { Paper } from 'components/Paper';
import { useGetUserProfileQuery } from 'services/userApi';
import { title } from 'process';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const Profile = () => {
  const { data: profile } = useGetUserProfileQuery(null);
  if (!profile) return <div>loading...</div>;

  return (
    <div className="my-4" data-testid="sections">
      <h1 className="text-center text-4xl font-bold text-indigo-600">My Profile</h1>
      <h2 className="my-3 text-center text-2xl font-semibold text-gray-500">
        Here you can see detailed statistics about your learning progress
      </h2>
      <div className="my-8">
        <h3 className="text-3xl font-semibold text-indigo-600">All Time Statistics:</h3>
        <div className="flex gap-4 my-4">
          <StatItem title="Total Time" value={profile.totalTime} icon={uploadIcon} />
          <StatItem title="Total Lessons" value={profile.totalLessons} icon={lessonIcon} />
          <StatItem title="Top Speed (wpm)" value={profile.topSpeed} icon={topSpeedIcon} />
          <StatItem title="Average Speed (wpm)" value={profile.averageSpeed} icon={avgSeedIcon} />
        </div>
      </div>
      <div>
        <LineChart
          width={1200}
          height={400}
          data={profile.typingChart}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="lessonNumber" />
          <YAxis dataKey="wpm" />
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="wpm" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
};

type StatItemPropsType = {
  title: string;
  value: number | string;
  icon: string;
};

const StatItem: React.FC<StatItemPropsType> = ({ title, value, icon }) => {
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
