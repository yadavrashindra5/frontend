export async function generateStaticParams() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return data.map((value) => ({
        postid: value.id.toString(),
    }));
}

const PostDetails = async ({ params }) => {
    const { postid } = await params;

    return <h1>Post Details {postid}</h1>;
};

export default PostDetails;