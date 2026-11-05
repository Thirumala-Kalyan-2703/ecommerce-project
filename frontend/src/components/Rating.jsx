
const Rating = ({ rating, numReviews }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const fillPercentage = Math.max(
          0,
          Math.min(1, rating - star + 1)
        ) * 100;

        return (
          <span
            key={star}
            className="relative inline-block text-xl leading-none"
          >
            {/* Background: empty star */}
            <span className="text-slate-300">★</span>

            {/* Foreground: filled portion of the same star */}
            <span
              className="absolute left-0 top-0 overflow-hidden whitespace-nowrap text-amber-400"
              style={{ width: `${fillPercentage}%` }}
            >
              ★
            </span>
          </span>
        );
      })}

      <span className="ml-2 text-sm text-slate-600">
        {numReviews} reviews
      </span>
    </div>
  );
};

export default Rating;
