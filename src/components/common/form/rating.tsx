import StarRatings from "react-star-ratings";

interface IRatingProps {
  name?: string;
  value: number;
  onChange: (rating: number) => void;
  numberOfStars?: number;
  dimension?: string;
  error?: string;
}

export const Rating = ({
  name,
  value,
  onChange,
  numberOfStars = 5,
  dimension = "35",
  error
}: IRatingProps) => {
  return (
    <div className="flex w-full flex-col">
      <StarRatings
        rating={value}
        starRatedColor="blue"
        changeRating={onChange}
        numberOfStars={numberOfStars}
        name={name}
        starDimension={dimension}
      />
      {error ? (
        <span className=" text-[12px] text-[#a51212]">{error}</span>
      ) : null}
    </div>
  );
};
