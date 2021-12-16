import React from 'react';

interface ISiderProps {
  siderContent?: JSX.Element | string;
}

const Sider: React.FC<ISiderProps> = (props) => {
  return (
    <div
      style={{
        maxWidth: `300px`,
        width: 'max-content',
        position: 'fixed',
        top: '100px',
        left: '10px',
        zIndex: '1',
      }}
    >
      {props.siderContent}
    </div>
  );
};

export default Sider;
