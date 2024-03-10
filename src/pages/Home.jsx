import React from 'react';
import profilePic from '../images/profilePic.jpeg'; // Import profile picture

const styles = {
    card: {
        textAlign: 'center',
        width: '68%',
        margin: '14rem auto',
        display: 'flex', // Using flexbox for layout
        alignItems: 'center'
    },
    baseText: {
        fontSize: '4rem'
    },
    innerText: {
        color: '#FF101F',
        fontSize: '6rem',
        fontWeight: 'bold',
    },
    profileImageContainer: {
        marginLeft: '25%' // Adjust the margin to separate the image from text
    },
    profileImage: {
        width: '75%', // width of the image
        height: '75%', // height of the image
        borderRadius: '50%', // round up the photo
        opacity: 0.6, // Lighten up the photo
    }
};

export default function Home() {
    return (
        <div style={styles.card}>
            <div>
                <span style={styles.baseText}>Hi! I'm </span>
                <span style={styles.innerText}>Lisa</span>
                <span style={styles.baseText}>, a web developer</span>
                <p>Full Stack Developer</p>
            </div>
            <div style={styles.profileImageContainer}>
                <img src={profilePic} alt="Profile" style={styles.profileImage} />
            </div>
        </div>
    );
}
