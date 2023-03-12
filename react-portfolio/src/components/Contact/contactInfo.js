function ContactInfo() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row pb-4">
          <div className="col-lg-8">
            <h1 className="text-brand underline">ABOUT ME</h1>
            <h3 className="smaller">Here's a bit more about me</h3>
          </div>
        </div>
      </div>

      <div className="px-lg-3">
        <h6>What im working towards</h6>
        <p>
          {" "}
          My current main focus is to land my first job as a Junior Front End
          developer
        </p>
      </div>

      <div className="px-lg-3">
        <h6>Hobbies and Interests</h6>
        <ul>
          <li>
            I LOVE to travel, i try to visit at least 4-5 countries every year
          </li>
          <li>
            I'm a Music Producer by profession having achieved a 2:1 in BA Music
            Production and Sound Engineering
          </li>
          <li>
            I'm a tech enthusiast. I've always been interested in tech and i'm
            always looking out for the latest new technologies
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactInfo;
