import enviIMG from "../assets/imgs/envi-mayfest-actionshot.jpg";

function HomePage() {
  return (
    <section>
            <img
        src={enviIMG}
        aria-description="A DJ (envi) playing music behind a stage in the woods."
        alt="enviIMG"
      />
      <h3>Hi! I{"'"}m envi!</h3>
      <p>welcome to my site!</p>
    </section>
  );
}

export default HomePage;
