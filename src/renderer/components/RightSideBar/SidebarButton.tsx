import React from 'react';
import '../Application.scss';
import './RightSidebar.scss';

type SidebarButtonProps = {
  title: string;
  buttonType: string;
  icon?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const SidebarButton = ({
  buttonType,
  title,
  icon,
  onClick,
}: SidebarButtonProps) => {
  const iconName = `fi fi-rr-${icon}`
  return (
    <div>
      <button
        title={title}
        className='sidebar-button'
        id={buttonType}
        onClick={onClick}
      >
        <i className={iconName}></i>
      </button>
    </div>
  );
};

export default SidebarButton;