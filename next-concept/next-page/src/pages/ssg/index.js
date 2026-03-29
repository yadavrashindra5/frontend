const SSG = (props) => {
  const { data } = props;
  return (
    <div>
      {data.map((d) => (
        <div key={d.id}>{d.title}</div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return { props: { data } };
}

export default SSG;
