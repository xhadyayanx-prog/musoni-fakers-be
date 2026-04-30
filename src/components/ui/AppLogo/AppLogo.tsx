'use client';

import React, { memo, useMemo } from 'react';
import AppIcon from '../AppIcon/AppIcon';
import AppImage from '../AppImage/AppImage';

interface AppLogoProps {
  src?: string;
  iconName?: string;
  size?: number;
  className?: string;
  onClick?: () => void;
}

const AppLogo = memo(function AppLogo({
  src = '/assets/images/app_logo.png',
  iconName = 'SparklesIcon',
  size = 64,
  className = '',
  onClick,
}: AppLogoProps) {
  const containerStyle = useMemo(() => {
    return {
      display: 'flex',
      alignItems: 'center',
      cursor: onClick ? 'pointer' : undefined,
    } as React.CSSProperties;
  }, [onClick]);

  return (
    <div style={containerStyle} className={className} onClick={onClick}>
      {src ? (
        <AppImage
          src={src}
          alt="Logo"
          width={size}
          height={size}
          className=""
          priority={true}
          unoptimized={src.endsWith('.svg')}
        />
      ) : (
        <AppIcon name={iconName} size={size} />
      )}
    </div>
  );
});

export default AppLogo;
