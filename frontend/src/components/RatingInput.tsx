import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface RatingInputProps {
  initialRating?: number;
  onChange: (rating: number) => void;
  readOnly?: boolean;
}

const RatingInput: React.FC<RatingInputProps> = ({ 
  initialRating = 0, 
  onChange, 
  readOnly = false 
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleClick = (value: number) => {
    if (readOnly) return;
    
    setRating(value);
    onChange(value);
  };

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        
        return (
          <FaStar
            key={index}
            className={readOnly ? "" : "cursor-pointer"}
            color={ratingValue <= (hover || rating) ? "#FFC107" : "#E4E5E9"}
            size={24}
            onClick={() => handleClick(ratingValue)}
            onMouseEnter={() => !readOnly && setHover(ratingValue)}
            onMouseLeave={() => !readOnly && setHover(0)}
          />
        );
      })}
    </div>
  );
};

export default RatingInput;