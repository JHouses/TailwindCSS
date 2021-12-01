import React from 'react';

const Title = ({
  children,
}) => {
  const CONTAINER_TITLE = 'rounded-xl h-20 w-52 bg-white p-3 mb-10 text-lg font-regular text-center text-indigo-600';

  return (
    <div className={CONTAINER_TITLE}>
      <p>{children}</p>
    </div>
  );
}

export default Title;
