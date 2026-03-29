const StaticSitePaths = (props) => {
  const { post } = props;
  return (
    <div>
      <h3>{post.title}</h3>
      <div>{post.body}</div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const fetchInstance = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await fetchInstance.json();
  return { props: { post: data } };
}

export async function getStaticPaths() {
  console.log("getStaticPaths");
  const fetchInstance = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const data = await fetchInstance.json();
  const paths = data.map((value) => {
    return { params: { id: `${value.id}` } };
  });
  return { paths, fallback: false };
}

export default StaticSitePaths;
