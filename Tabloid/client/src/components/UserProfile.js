import React, { useEffect, useState } from "react";

export default function UserProfileList() {
  const [userProfiles, setUserProfiles] = useState([]);

  useEffect(() => {
    const fetchUserProfiles = async () => {
      try {
        const response = await fetch("/api/userprofiles");
        if (response.ok) {
          const data = await response.json();
          setUserProfiles(data);
        } else {
          throw new Error("Failed to fetch user profiles");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfiles();
  }, []);

  return (
    <div>
      <h2>User Profiles List</h2>
      {userProfiles.map((userProfile) => (
        <div key={userProfile.id}>
          <h3>{userProfile.displayName}</h3>
          <p>Email: {userProfile.email}</p>
          <p>Image Location: {userProfile.imageLocation}</p>
        </div>
      ))}
    </div>
  );
};
