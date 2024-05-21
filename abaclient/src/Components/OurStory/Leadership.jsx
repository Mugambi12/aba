import "./Leadership.css";

const Leadership = () => {
  const leadersData = [
    {
      name: "Reenal Scott",
      occupation: "Advertising Consultant",
      details:
        "Reenal Scott is the Founder and CEO of Elixir, which he started from his dorm room in 2013 with 3 people only.",
      imageUrl: "/src/assets/images/leadership/portrait-1.jpg",
    },
    {
      name: "Lily Anderson",
      occupation: "Activation Consultant",
      details:
        "Lily leads Elixir UK and oversees the company’s Customer Operations teams supporting millions of users.",
      imageUrl: "/src/assets/images/leadership/portrait-2.jpg",
    },
    {
      name: "Thomas Anderson",
      occupation: "Change Management Consultant",
      details:
        "As the VP of People, Thomas’s focus lies in the development and optimization of talent retention.",
      imageUrl: "/src/assets/images/leadership/portrait-3.jpg",
    },
    {
      name: "Legartha Mantana",
      occupation: "Brand Management Consultant",
      details:
        "As General Counsel of Elixir, Tony oversees global legal activities and policies across all aspects.",
      imageUrl: "/src/assets/images/leadership/portrait-4.jpg",
    },
    {
      name: "John Snow",
      occupation: "Business Analyst",
      details:
        "John has overseen the meteoric growth while protecting scaling its uniquely creative and culture.",
      imageUrl: "/src/assets/images/leadership/portrait-5.jpg",
    },
    {
      name: "Ragner Lothbrok",
      occupation: "Business Consultant",
      details:
        "Ragner, SVP of Engineering, oversees Elixir’s vast engineering organization which drives the core programming.",
      imageUrl: "/src/assets/images/leadership/portrait-6.jpg",
    },
  ];

  return (
    <>
      <section className="global-leadership">
        <div className="overview">
          <h3 className="title">Global Team</h3>
          <hr className="underline-short" />
        </div>

        <div className="leadership-container">
          {leadersData.map((leader, index) => (
            <div key={index} className="leader-card">
              <img
                className="card-img-top"
                src={leader.imageUrl}
                alt={leader.name}
              />
              <div className="leader-card-body">
                <h5 className="leader-name">{leader.name}</h5>
                <h6 className="leader-occupation">{leader.occupation}</h6>
                <p className="leader-details">{leader.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Leadership;
