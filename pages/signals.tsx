import SignalPage from "./[slug]";

import signals from "../signals/signals.json";

const Signals = () => {
  return (
    <section className="signals-list">
      {signals.map((signal) => (
        <div className="signals-list-item">
          <a href={`/${signal.slug}`}>{signal.name}</a>
        </div>
      ))}
    </section>
  );
};

export default Signals;
