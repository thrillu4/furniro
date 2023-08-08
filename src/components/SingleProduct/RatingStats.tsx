interface RatingStarsProps {
    rating?: string;
}


const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
    const numRating = Number(rating);
    const filledStars = Math.floor(numRating);
    const halfStar = numRating - filledStars >= 0.5;
    const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);
  
    return (
      <div className="flex items-center">
        {Array.from({ length: filledStars }).map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 1l1.556 4.733h4.389L12.622 9.4l1.556 4.733-4.078-3.067-4.079 3.066 1.557-4.733L1.055 5.733h4.388z" />
          </svg>
        ))}
        {halfStar && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 1l1.556 4.733h4.389L12.622 9.4l1.556 4.733-4.078-3.067-4.079 3.066 1.557-4.733L1.055 5.733h4.388z" />
          </svg>
        )}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-300 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 1l1.556 4.733h4.389L12.622 9.4l1.556 4.733-4.078-3.067-4.079 3.066 1.557-4.733L1.055 5.733h4.388z" />
          </svg>
        ))}
      </div>
    );
  };
  
  export default RatingStars;