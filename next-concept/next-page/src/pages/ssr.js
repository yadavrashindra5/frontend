const SSR = ({ name, address }) => {
  console.log({ name, address });
  return (
    <div>
      <div>This is server side rendering</div>
      <button onClick={() => {}}>save</button>
    </div>
  );
};

export function getServerSideProps() {
  console.log("this is server side props");
  return { props: { name: "rashindra", address: "janakpur" } };
}

export default SSR;
