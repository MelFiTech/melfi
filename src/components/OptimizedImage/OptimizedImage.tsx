'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
  // Animation props
  animate?: boolean;
  initial?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
  whileHover?: any;
  whileTap?: any;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 85,
  fill = false,
  sizes,
  placeholder = 'empty',
  blurDataURL,
  style,
  onLoad,
  onError,
  animate = false,
  initial,
  whileInView,
  viewport,
  transition,
  whileHover,
  whileTap,
  ...props
}) => {
  const imageProps = {
    src,
    alt,
    width: fill ? undefined : width,
    height: fill ? undefined : height,
    className,
    priority,
    quality,
    fill,
    sizes,
    placeholder,
    blurDataURL,
    style,
    onLoad,
    onError,
    ...props,
  };

  if (animate) {
    return (
      <motion.div
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}
        whileHover={whileHover}
        whileTap={whileTap}
        className={fill ? 'relative' : ''}
      >
        <Image {...imageProps} />
      </motion.div>
    );
  }

  return <Image {...imageProps} />;
};

// Pre-configured components for common use cases
export const BackgroundImage: React.FC<
  Omit<OptimizedImageProps, 'fill' | 'sizes'> & {
    containerClassName?: string;
    objectPosition?: string;
  }
> = ({ containerClassName = '', objectPosition = 'center', className = '', ...props }) => (
  <div className={`relative ${containerClassName}`}>
    <OptimizedImage
      {...props}
      fill
      className={`object-cover ${className}`}
      style={{ objectPosition }}
      sizes='100vw'
    />
  </div>
);

export const ResponsiveImage: React.FC<
  Omit<OptimizedImageProps, 'sizes'> & {
    breakpoints?: { [key: string]: string };
    srcSet?: { [key: string]: string };
  }
> = ({
  breakpoints = {
    '(max-width: 640px)': '100vw',
    '(max-width: 1024px)': '50vw',
    default: '33vw',
  },
  srcSet,
  ...props
}) => {
  const sizes = Object.entries(breakpoints)
    .map(([query, size]) => `${query} ${size}`)
    .join(', ');

  // Generate srcSet for different sizes
  const generateSrcSet = (baseSrc: string) => {
    if (srcSet)
      return Object.entries(srcSet)
        .map(([size, src]) => `${src} ${size}`)
        .join(', ');

    // Auto-generate srcSet based on common breakpoints
    const sizes = ['400w', '800w', '1200w', '1920w'];
    return sizes
      .map((size) => {
        const sizeNum = parseInt(size);
        const webpSrc = baseSrc.replace(
          /\.(png|jpg|jpeg)$/i,
          `-${
            sizeNum <= 400
              ? 'small'
              : sizeNum <= 800
              ? 'medium'
              : sizeNum <= 1200
              ? 'large'
              : 'xlarge'
          }.webp`
        );
        return `${webpSrc} ${size}`;
      })
      .join(', ');
  };

  return <OptimizedImage {...props} sizes={sizes} srcSet={generateSrcSet(props.src)} />;
};

export const LazyImage: React.FC<OptimizedImageProps> = (props) => (
  <OptimizedImage
    {...props}
    priority={false}
    placeholder='blur'
    blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
  />
);
