import React from 'react';

type ButtonProps = {
  buttonAction: React.MouseEventHandler<HTMLButtonElement>;
};

function Button({ buttonAction }: ButtonProps) {
  return (
    <button type="button" onClick={buttonAction}>
      Increment
    </button>
  );
}

export default Button;
