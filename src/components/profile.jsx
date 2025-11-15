import { useEffect, useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    address: "",
    avatar: "",
    department_id: "",
    salary_rate: "",
  });

  const userId = localStorage.getItem("userId");
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  // Lấy dữ liệu profile
  useEffect(() => {
    const fetchProfile = async () => {
      if (!userId || !token) return;
      try {
        const res = await fetch(`http://localhost:8080/employee/${username}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      }
    };

    fetchProfile();
  }, [userId, token]);

  // Update profile
  const handleUpdate = async () => {
    try {
      const res = await fetch(`http://localhost:8080/employee/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(profile),
      });
      const data = await res.json();
      alert("Profile updated!");
      setProfile(data);
    } catch (err) {
      console.error("Failed to update profile:", err);
    }
  };

  return (
    <div>
      <h2>My Profile</h2>

      <label>Name:</label>
      <input
        value={profile.name}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
      />

      <label>Age:</label>
      <input
        type="number"
        value={profile.age}
        onChange={(e) => setProfile({ ...profile, age: e.target.value })}
      />

      <label>Address:</label>
      <input
        value={profile.address}
        onChange={(e) => setProfile({ ...profile, address: e.target.value })}
      />

      <label>Avatar URL:</label>
      <input
        value={profile.avatar}
        onChange={(e) => setProfile({ ...profile, avatar: e.target.value })}
      />

      <label>Department ID:</label>
      <input
        value={profile.department_id}
        onChange={(e) =>
          setProfile({ ...profile, department_id: e.target.value })
        }
      />

      <label>Salary Rate:</label>
      <input
        type="number"
        value={profile.salary_rate}
        onChange={(e) =>
          setProfile({ ...profile, salary_rate: e.target.value })
        }
      />

      <button onClick={handleUpdate}>Save</button>
    </div>
  );
}
