const imageMap = import.meta.glob("../assets/*", {
  eager: true,
  as: "url",
});

export default function ArtworkCard({ image, title, currentBid }) {
    const resolvedSrc = imageMap[`../assets/${image}`] || image;

  return (
    <section className="card">
       <img src={resolvedSrc} alt={title} />
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
