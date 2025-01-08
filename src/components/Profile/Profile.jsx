import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user , isLoggedIn}=useAuth();

  if(!isLoggedIn){
    return(
      <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-800">You need to log in to view your profile.</h1>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-4xl font-bold">
            {user?.firstName?.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-xl font-semibold mt-4">{user.firstName}</h2>
          <p className="text-gray-600 text-sm">{user.role}</p>
        </div>
        <div className="mt-6 flex justify-between">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Edit Profile
          </button>
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
