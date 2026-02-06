export default function ArtworkCard({ image, title, currentBid }) {
  return (
    <section className="card">
      <img
        // src={new URL(`../assets/${image}`, import.meta.url).href}
        src={new URL(`../assets/${image}`, import.meta.url).href}
        alt={title}
      />
      <div className="card-info">
        <div className="card-row">
          <h4>{title}</h4>
          <span className="bid">
            <small>Current Bid</small>
            {currentBid}
          </span>
        </div>

        <button className="bid-btn">Place a bid</button>
      </div>
    </section>
  );
}
