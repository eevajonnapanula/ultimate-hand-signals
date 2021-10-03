import { NextPage } from "next";
import signals from "../signals/signals.json";

interface Signal {
  slug: string;
  name: string;
  image: string;
  description;
}

interface SignalProps {
  signal: Signal;
}

const SignalPage: NextPage<SignalProps> = ({ signal }) => {
  if (!signal) {
    return <section>No signal on that name</section>;
  }
  return (
    <section className="signal-details">
      <h2>{signal && signal.name}</h2>
      <img src={signal.image} alt="" />
      <p>{signal.description}</p>
    </section>
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.params;

  const signal = signals.find((item) => item.slug === slug);
  return {
    props: {
      signal: signal ?? null,
    },
  };
};

export default SignalPage;
