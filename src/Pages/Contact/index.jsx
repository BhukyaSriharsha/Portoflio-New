import ContactForm from "./ContactForm/index.jsx"; 
import Counter from '../../Animated/Counter/Counter.jsx';
import './index.css';

const Contact = () => {
  return (
    <div className="contact-container">
        <h1 className='contact-head'>Contact Me</h1>
        <ContactForm />
        <div className="like-container">
            <Counter
                 value={1}
                places={[100, 10, 1]}
            fontSize={60}
            padding={5}
            gap={10}
            textColor="white"
            fontWeight={600}
            />
      </div>    
    </div>
    )
}

export default Contact;