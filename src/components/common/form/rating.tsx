import StarRatings from "react-star-ratings";

interface IRatingProps {
  name?: string;
  value: number;
  onChange: (rating: number) => void;
  numberOfStarts?: number;
  dimension?: string;
}

export const Rating = ({
  name,
  value,
  onChange,
  numberOfStarts = 5,
  dimension = "35"
}: IRatingProps) => {
  return (
    <div className="flex w-full">
      <StarRatings
        rating={value}
        starRatedColor="blue"
        changeRating={onChange}
        numberOfStars={numberOfStarts}
        name={name}
        starDimension={dimension}
      />
    </div>
  );
};
