const InitialProps = ({ posts }) => {
  console.log(posts);
  return <div>Hello </div>;
};

InitialProps.getInitialProps = async (ctx) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return { posts: data };
};

export default InitialProps;
