const styles = {
    card: {
        textAlign: 'center',
        margin: '14rem'
    },
    baseText: {
        fontSize: '4rem'
    },
    innerText: {
        color: '#FF101F',
        fontSize: '6rem',
        fontWeight: 'bold',
    },
};

export default function Home() {
    return (
        <div style={styles.card} className="col-sm-3">
            <text style={styles.baseText}>Hi! I'm </text>
                <text style={styles.innerText}>Lisa</text>
            <text style={styles.baseText}>, a web developer</text>
            <p>Full Stack Developer</p>
        </div>
    );
}