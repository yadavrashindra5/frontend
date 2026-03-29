// function About() {
//   return <div>About</div>;
// }

// export default About;

// pages/about.tsx
"use client";
export async function getStaticProps() {
  return {
    props: { generatedAt: new Date().toISOString() },
  };
}

export default function About({ generatedAt }) {
  return (
    <div>
      <h1>About Page</h1>
      <p>Generated at build: {generatedAt}</p>
    </div>
  );
}
