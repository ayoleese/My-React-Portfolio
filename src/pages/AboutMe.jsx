import React from 'react';
import BioPhoto from '../images/BioPhoto.jpeg';

const styles = {
    bioContainer: {
        display: 'flex',
        alignItems: 'center',
        // width: '75%'
    },
    innerText: {
        color: '#FF101F',
        fontWeight: 'bold',
    },
    bio: {
        fontSize: '20px',
        // color: '#FF101F',
        marginLeft: '5rem',
        width: '50%' // Add some space between the photo and the text
    },
    photo: {
        width: '25%', // Adjust photo width as needed
        height: 'auto', // Maintain aspect ratio
        borderRadius: '8px',
        margin: '0 6rem',
        opacity: 0.7, // Add rounded corners to the photo
    },
};

export default function AboutMe() {
    return (
        <div>
            <h1>About <span style={styles.innerText}>Me</span></h1>
            <div style={styles.bioContainer}>
                <img src={BioPhoto} alt="Bio" style={styles.photo} />
                <div style={styles.bio}> Hello there! I'm diving headfirst into the exciting world of web development with a focus on backend technologies, thanks to a friend's insightful suggestion. My knack for problem-solving has led me to explore this field, and I'm thrilled by the challenges it presents. My journey to this point has been diverse; I currently work as a pharmacy technician, where my aspiration to become a pharmacist was tempered by the demands of both work and school. Nevertheless, my passion for learning and adapting persists. As an American-born child of Cambodian refugee parents who fled the horrors of the Khmer Rouge regime in 1979, I carry with me a profound appreciation for resilience and perseverance. Now, as I chart my course in web development, I blend my technical skills with a deep sense of gratitude for the opportunities afforded to me. I'm eager to contribute to this ever-evolving field and create meaningful solutions that make a difference.</div>
            </div>
        </div>        
    );
}
