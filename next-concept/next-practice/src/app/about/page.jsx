async function getComments() {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
        cache: "no-store", // optional: disables caching
    });

    throw new Error("This is error page")

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

const About = async () => {
    const comments = await getComments();

    return (
        <div>
            <h1>About</h1>
            <ul>
                {comments.slice(0, 20).map((comment) => (
                    <li key={comment.id}>
                        <strong>{comment.name}</strong><br />
                        <small>{comment.email}</small>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default About;