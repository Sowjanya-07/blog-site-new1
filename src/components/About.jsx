// Displays blog information and logo.
// Parent: App

function About({ image, about }) {
  return (
    <aside>
      <img
        src={image}
        alt="blog logo"
        width="150"
      />

      <p>{about}</p>
    </aside>
  );
}

export default About;