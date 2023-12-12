import heroImg from './assets/hero.svg';
const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Ori Bar</h1>
          <p>
          Recent qualification as a Business Intelligence Developer from Experis Academy. Computer Science and Cognitive Science (B.Sc.) graduate at Haifa University.
I have strong self-learning abilities and excellent social skills. Looking for a software development position or an analytical 
position. Python,C, C++ programming knowledge. Excellent social skills. Able to perform successfully as an 
independent or as part of a team.
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