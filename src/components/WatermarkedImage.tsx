import React from 'react';
import Image from 'next/image';
import styles from './WatermarkedImage.module.css';

interface WatermarkedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

const WatermarkedImage: React.FC<WatermarkedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
}) => {
  return (
    <div className={`${styles.watermarkContainer} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={styles.mainImage}
      />
      <div className={styles.watermark}>
        <Image
          src="/images/logo-myohm.png"
          alt="My Ohm Technologies"
          width={100}
          height={50}
          className={styles.watermarkLogo}
        />
      </div>
    </div>
  );
};

export default WatermarkedImage;
