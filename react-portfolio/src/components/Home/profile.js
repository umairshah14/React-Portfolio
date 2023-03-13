import me from "./images/me.png";
import ListGroup from "react-bootstrap/ListGroup";
import Skills from "./skills";
function Me() {
  return (
    <section className="section about-section gray-bg" id="about">
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-lg-7">
            <div className="about-text go-to">
              <h3 className="dark-color">Hi I'm Umair!</h3>
              <h6 className="theme-color lead">
                A Junior Developer based in London
              </h6>
              <p>
                Welcome to my portfolio site. I have been coding for just under{" "}
                <mark>2 years</mark> now and have attended multiple bootcamps.
                Originally coming from a musical background, i decided to make a
                shift into Tech, and well, here i am. Here's some fun facts
                about me you probably didn't know:
              </p>

              <ListGroup className="col-9">
                <ListGroup.Item>
                  <i className="fa-solid fa-plane"></i> I love to travel, i try
                  to visit at least 4-5 countries every year
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="fa-solid fa-laptop-code"></i> I'm a tech
                  enthusiast always looking out for the latest technologies
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="fa-solid fa-headphones"></i> I have a 2:1 in BA Music
                  Production and Sound Engineering
                </ListGroup.Item>
              </ListGroup>
            </div>
            <br />
          </div>
          <div className="col-lg-5">
            <div className="about-avatar">
              <img src={me} style={{ borderRadius: "50%" }} title="" alt="" />
            </div>
          </div>
        </div>
        <br />
        <div className="counter">
          <div className="row">
            <div className="col-4 col-lg-4">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="500" data-speed="500">
                  2
                </h6>
                <p className="m-0px font-w-600">Years of coding experience</p>
              </div>
            </div>
            <div className="col-4 col-lg-4">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="150" data-speed="150">
                  10+
                </h6>
                <p className="m-0px font-w-600">Projects Completed</p>
              </div>
            </div>
            <div className="col-4 col-lg-4">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="850" data-speed="850">
                  ∞
                </h6>
                <p className="m-0px font-w-600">Potential</p>
              </div>
            </div>
          </div>
        </div>
        <br />

        <Skills />
      </div>
    </section>
  );
}

export default Me;
