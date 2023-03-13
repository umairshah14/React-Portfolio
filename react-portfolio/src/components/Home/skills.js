export default function Skills() {
  return (
    <>
      <div className="row justify-content-center">
      <div className="col-12 center pb-3">
        <h1 style={{ alignSelf: "center", textDecoration: "underline"}}>Skills</h1>
      </div>
        <div className="col-sm-6 col-lg-3">
          <div className="skill pb-4">
            <h3>Front-End</h3>
            <ul className="list-group">
              <li className="list-group-item">HTML</li>
              <li className="list-group-item">CSS</li>
              <li className="list-group-item">Javascript</li>
              <li className="list-group-item">React</li>
              <li className="list-group-item">Bootstrap</li>
              <li className="list-group-item">Figma</li>
            </ul>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3">
          <div className="skill pb-4">
            <h3>Back-End</h3>
            <ul className="list-group">
              <li className="list-group-item">Node ES6</li>
              <li className="list-group-item">Git</li>
              <li className="list-group-item">Jest</li>
              <li className="list-group-item">JQuery</li>
              <li className="list-group-item">NPM</li>
              <li className="list-group-item">Working with APIs'</li>
            </ul>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3">
          <div className="skill pb-4">
            <h3>Design</h3>
            <ul className="list-group">
              <li className="list-group-item">Figma</li>
              <li className="list-group-item">Marvel</li>
              <li className="list-group-item">Canva</li>
              <li className="list-group-item">Typeform</li>
            </ul>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3">
          <div className="skill pb-4">
            <h3>Learning Interests</h3>
            <ul className="list-group">
              <li className="list-group-item">Frameworks</li>
              <li className="list-group-item">UI UX</li>
              <li className="list-group-item">Mobile Development</li>
              <li className="list-group-item">Web-App Development</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
