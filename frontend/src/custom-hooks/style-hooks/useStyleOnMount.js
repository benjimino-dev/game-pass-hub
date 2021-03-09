import { useState, useEffect } from 'react';
const useStyleOnMount = (style) => {
  const [activeStyle, setActiveStyle] = useState(0);
  useEffect(() => {
    setActiveStyle(style);
  });

  return activeStyle;
};

export default useStyleOnMount;
