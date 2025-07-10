import Card from "./component/Card";

const App = () => {
  // Data stored in array
  const people = [
    {
      id: 1,
      name: "Shubham Patil",
      age: 26,
      bio: "Software developer passionate about React",
    },
    {
      id: 2,
      name: "Pranav Patil",
      age: 23,
      bio: "Central government employee at immigration department of India",
    },
    {
      id: 3,
      name: "Karthikey Sontakke",
      age: 25,
      bio: "Software developer",
    },
    {
      id: 4,
      name: "Sagar Anuse",
      age: 26,
      bio: "Design Engineer",
    },
  ];

  return (
    <div className="app">
      <h1 className="heading">Personal Info Cards</h1>
      <div className="card-container">
        {people.map((person) => (
          <Card
            key={person.id}
            name={person.name}
            age={person.age}
            bio={person.bio} // data pass via props
          />
        ))}
      </div>
    </div>
  );
};

export default App;
