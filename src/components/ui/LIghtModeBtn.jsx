import { RiMoonFill, RiSunFill } from '@remixicon/react';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';
import { useEffect } from 'react';

function LIghtModeBtn() {
  const [islight, setIsLight] = useLocalStorageState(
    window.matchMedia('(prefers-color-scheme: light)').matches,
    'islight',
  );

  useEffect(
    function () {
      if (islight) {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
      } else {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
      }
    },
    [islight],
  );

  const handleDarkMode = () => {
    setIsLight((islight) => !islight);
  };

  return (
    <button onClick={() => handleDarkMode()} className="cursor-pointer">
      {' '}
      {islight ? (
        <RiMoonFill className="text-black" />
      ) : (
        <RiSunFill className="text-[#D14009]" />
      )}
    </button>
  );
}

export default LIghtModeBtn;
