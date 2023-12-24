import heroImg from './assets/hero.svg';
const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Ori Bar</h1>
          <p>
          Hello there! I recently earned my qualification as a Business Intelligence Developer from Experis Academy and hold a degree in Computer Science and Cognitive Science (B.Sc.) from Haifa University. Endowed with strong self-learning capabilities and exceptional social skills, I am actively pursuing opportunities in software development or analytical positions. Proficient in Python, C, and C++ programming, I bring a versatile skill set to the table. 
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;