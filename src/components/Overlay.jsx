import { Scroll, useScroll } from '@react-three/drei';
import React,{useState} from 'react';
import '../App.css';
import { useFrame } from '@react-three/fiber';

const Section = (props) => {
    return (
      <section
        className={`section ${props.class_name}`}
        style={{
          opacity: props.opacity,
        }}
      >
        <div className={`container ${props.class_name}`}>
         {props.children}
        </div>
      </section>
    );
  };

const Overlay = () => {
    const scroll = useScroll();
    const [opacityFirstSection, setOpacityFirstSection] = useState(1);
    const [opacitySecondSection, setOpacitySecondSection] = useState(1);
    const [opacityLastSection, setOpacityLastSection] = useState(1);
  
    useFrame(() => {
      setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
      setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
      setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
    });


    return (
        <Scroll html>
            <div className='screen'>
                <Section class_name='bio' opacity={opacityFirstSection}>
                    <h1>Hello, I'm Vipin Kumar</h1>
                    <h4>Welcome to my beautiful portfolio</h4>
                    <p>I know</p>
                    <ul className="list">
                        <li>🧑‍💻 How to code</li>
                        <li>🧑‍🏫 How to learn</li>
                        <li>📦 How to deliver</li>
                    </ul>
                    <p className="arrowDown">↓</p>
                </Section>
                <Section class_name='skills' opacity={opacitySecondSection}>
                    <h1>Here are my skillsets 🔥</h1>
                    <h4>PS: I never test</h4>
                    <p>I know</p>
                    <ul className="list">
                        <li>🚀 Html</li>
                        <li>🚀 Css</li>
                        <li>🚀 ReactJS</li>
                        <li>🚀 Javascript</li>
                        <li>🚀 ThreeJS</li>
                        <li>🚀 Bootstrap</li>
                    </ul>
                    <p className="arrowDown">↓</p>
                </Section>
                <Section class_name='contact' opacity={opacityLastSection}>
                    <h1> 🤙 Call me maybe?</h1>
                    <h4> I'm very expensive but you won't regret it</h4>
                    <p> 📧 <a href='mailto:mr.kumarvipin94@gmail.com?subject=Me&body=Hello!'>mr.kumarvipin94@gmail.com</a></p>
                </Section>
            </div>
        </Scroll>
    );
};

export default Overlay;