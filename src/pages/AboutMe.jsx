const styles = {
    bio: {
        fontSize: '20px',
        padding: '4em 8rem 0 54rem'
    },
};

export default function AboutMe() {
    return (
        <div>
            <h1>About Me</h1>
            <div style={styles.bio}> Hello there! I'm diving headfirst into the exciting world of web development with a focus on backend technologies, thanks to a friend's insightful suggestion. My knack for problem-solving has led me to explore this field, and I'm thrilled by the challenges it presents. My journey to this point has been diverse; I currently work as a pharmacy technician, where my aspiration to become a pharmacist was tempered by the demands of both work and school. Nevertheless, my passion for learning and adapting persists. As an American-born child of Cambodian refugee parents who fled the horrors of the Khmer Rouge regime in 1979, I carry with me a profound appreciation for resilience and perseverance. Now, as I chart my course in web development, I blend my technical skills with a deep sense of gratitude for the opportunities afforded to me. I'm eager to contribute to this ever-evolving field and create meaningful solutions that make a difference.</div>
        </div>        
    );
}