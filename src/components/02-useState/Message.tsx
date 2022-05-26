import { useEffect, useState } from 'react';

const Message = () => {
  const [coors, setCoors] = useState({ x: 0, y: 0 });
  const { x, y } = coors;

  useEffect(() => {
    console.log('I was mounted');

    const onMouseMove = (e: MouseEvent) => {
      setCoors({ x: e.x, y: e.y });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      console.log('I\'ll be unmounted');

      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div>
      <h3>Message</h3>
      <p>
        x:{x}, y: {y}
      </p>
    </div>
  );
};

export default Message;
