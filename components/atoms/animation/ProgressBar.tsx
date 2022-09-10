import { Progress } from 'flowbite-react';
import React, { useEffect, useState } from 'react';

const ProgressBar: React.FC<{
  label?: string;
  color?: 'dark' | 'blue' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple';
}> = ({ label, color }) => {
  const [percentage, setPercentage] = useState(0);

  const updatePercentage = () => {
    let timeOut = setTimeout(() => {
      setPercentage(value => (value += 1));
    }, 1000);

    if (percentage == 100) {
      clearTimeout(timeOut);
    }
  };

  useEffect(() => {
    let unsubcribe = false;

    if (!unsubcribe) {
      updatePercentage();
      unsubcribe = true;
    }

    return () => {
      unsubcribe = false;
    };
  }, [percentage]);

  return (
    <div className='flex flex-col gap-2'>
      <div className='text-base font-medium dark:text-white'>
        {percentage < 100 ? label : 'Finished'}
      </div>
      <Progress progress={percentage} size="sm" color={color} />
    </div>
  );
};

export default ProgressBar;
