import React from 'react';

const About = () => {
  const details = [
    { title: 'Education', desc: 'B.E. Computer Science and Engineering at S.A. Engineering College (2023–2027).' },
    { title: 'Academic Excellence', desc: 'Maintaining a strong academic record.' },
    { title: 'Development', desc: 'Hands-on experience in full-stack development, backend development, and React.' },
    { title: 'Design', desc: 'Interested in UI/UX design, wireframing, and creating user-friendly interfaces.' }
  ];

  return (
    <div>
      <p>GET TO KNOW ME</p>
      <h1>About Me</h1>

      <p>
        I am a Computer Science Engineering student passionate
        about building scalable applications and solving real-world problems.
      </p>

      <div>
        {details.map((item, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;