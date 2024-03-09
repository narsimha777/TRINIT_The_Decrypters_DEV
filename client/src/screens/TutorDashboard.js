import React from "react";

const TeacherDashboard = () => {
  const profile = {
    username: "TutorJane",
    password: "hashedPassword456",
    email: "tutor.jane@example.com",
    languages_known: [
      { name: "Spanish", level: "B2", trial_price: 90 },
      { name: "German", level: "A2", trial_price: 75 },
    ],
    role: "tutor",
    availability: [
      { start_time: "2024-03-09T10:00:00.000Z", duration: 60 },
      { start_time: "2024-03-09T14:00:00.000Z", duration: 90 },
    ],
    age: 28,
    experience: "Intermediate",
    courses_taking: ["course3", "course4"],
    rating: 4.2,
    description: "Passionate tutor in Spanish and German languages.",
    noofcourses: 2,
    country: "Canada",
  };

  return (
    <></>
  );
};

export default TeacherDashboard;
