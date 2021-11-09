import avgSeedIcon from 'assets/avgSpeed.svg';
import lessonIcon from 'assets/lesson.svg';
import topSpeedIcon from 'assets/topSpeed.svg';
import uploadIcon from 'assets/upload.svg';
import { Paper } from 'components/Paper';
import { ProfileStatItem, ProfileStatItemPreloader } from 'components/ProfileStatItem';
import { useDelayedQuery } from 'hooks/useDelayedQuery';
import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useGetUserProfileQuery } from 'services/userApi';

export const Profile = () => {
  const profile = useDelayedQuery(null, useGetUserProfileQuery);

  return (
    <div className="my-4" data-testid="sections">
      <h1 className="text-center text-4xl font-bold text-indigo-600">My Profile</h1>
      <h2 className="my-3 text-center text-2xl font-semibold text-gray-500">
        Here you can see detailed statistics about your learning progress
      </h2>
      <div className="my-8">
        <div className="flex gap-4 my-4">
          {profile ? (
            <>
              <ProfileStatItem title="Total Time" value={profile.totalTime} icon={uploadIcon} />
              <ProfileStatItem
                title="Total Lessons"
                value={profile.totalLessons}
                icon={lessonIcon}
              />
              <ProfileStatItem title="Top Speed" value={profile.topSpeed} icon={topSpeedIcon} />
              <ProfileStatItem title="Avg Speed" value={profile.averageSpeed} icon={avgSeedIcon} />
            </>
          ) : (
            [...Array(4)].map((v, i) => <ProfileStatItemPreloader key={i} />)
          )}
        </div>
      </div>
      <div>
        <h3 className="text-center text-3xl font-semibold text-indigo-600">Typing speed</h3>
        <h4 className="my-3 text-center text-2xl font-medium text-gray-500">
          This chart shows how overall typing speed changes over time.
        </h4>
        {profile ? (
          <Paper className="min-h-98 ">
            <ResponsiveContainer width={'99%'} height={400}>
              <LineChart
                width={1200}
                height={400}
                data={profile.typingChart}
                margin={{
                  top: 16,
                  right: 16,
                  left: 16,
                }}
                style={{ cursor: 'pointer' }}
              >
                <CartesianGrid />
                <XAxis dataKey="lessonNumber" />
                <YAxis dataKey="wpm" unit="wpm" />
                <Tooltip />
                <Line type="monotone" dataKey="wpm" stroke="#4F46E5" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
            <h4 className="text-center">Horizontal axis: lesson number. Vertical axis: wpm</h4>
          </Paper>
        ) : (
          <div className="flex justify-center items-center mt-16">
            <div
              className="
              animate-spin
              rounded-full
              h-32
              w-32
              border-t-4 border-b-4 border-indigo-700
            "
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};
