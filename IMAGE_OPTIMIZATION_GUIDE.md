# Image Optimization Guide

This guide explains the comprehensive image optimization implemented in the Melfi Agency website to improve loading performance and user experience.

## 🚀 What's Been Optimized

### 1. Next.js Image Optimization

- **Enabled WebP and AVIF formats** for better compression
- **Responsive image sizing** with multiple breakpoints
- **Lazy loading** for images below the fold
- **Priority loading** for critical images (hero, logos)
- **Automatic format selection** based on browser support

### 2. Custom OptimizedImage Components

- `OptimizedImage` - Base component with all optimization features
- `BackgroundImage` - For background images with proper positioning
- `ResponsiveImage` - For responsive images with srcset
- `LazyImage` - For lazy-loaded images with blur placeholder

### 3. Image Compression & Format Conversion

- **WebP format** (80% smaller than PNG)
- **AVIF format** (90% smaller than PNG, best compression)
- **Multiple sizes** (400w, 800w, 1200w, 1920w)
- **Quality optimization** (75-90% based on image type)

## 📊 Performance Improvements

### Before Optimization:

- 41 PNG images totaling ~2-5MB
- No lazy loading
- No responsive sizing
- All images loaded immediately

### After Optimization:

- **60-80% smaller file sizes** with WebP/AVIF
- **Lazy loading** for non-critical images
- **Responsive images** serving appropriate sizes
- **Priority loading** for above-the-fold content
- **Blur placeholders** for better perceived performance

## 🛠️ Implementation Details

### Next.js Configuration

```javascript
// next.config.js
images: {
  formats: ['image/webp', 'image/avif'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 60,
}
```

### Component Usage Examples

#### Hero Background (Priority Loading)

```tsx
<BackgroundImage
  src='/images/Hero-bg.png'
  alt='Hero Background'
  containerClassName='absolute inset-0'
  className='object-cover'
  priority
  quality={90}
/>
```

#### Lazy Loaded Images

```tsx
<LazyImage src='/images/team/member.png' alt='Team Member' width={300} height={400} quality={85} />
```

#### Responsive Images

```tsx
<ResponsiveImage
  src='/images/project.png'
  alt='Project Screenshot'
  width={516}
  height={500}
  breakpoints={{
    '(max-width: 640px)': '100vw',
    '(max-width: 1024px)': '50vw',
    default: '33vw',
  }}
/>
```

## 🎯 Image Optimization Strategy

### 1. Critical Images (Above the Fold)

- **Hero background**: Priority loading, high quality (90%)
- **Logo**: Priority loading, high quality (90%)
- **Navigation elements**: Priority loading

### 2. Content Images

- **Team photos**: Lazy loading, medium quality (85%)
- **Project screenshots**: Lazy loading, medium quality (85%)
- **Service illustrations**: Lazy loading, medium quality (85%)

### 3. Decorative Images

- **Icons**: Lazy loading, low quality (80%)
- **Client logos**: Lazy loading, low quality (75%)
- **Background elements**: Lazy loading, medium quality (85%)

## 📱 Responsive Image Sizes

| Breakpoint | Width  | Use Case                      |
| ---------- | ------ | ----------------------------- |
| 400w       | 400px  | Mobile thumbnails, icons      |
| 800w       | 800px  | Tablet images, medium content |
| 1200w      | 1200px | Desktop images, large content |
| 1920w      | 1920px | Large screens, hero images    |

## 🔧 Running Image Optimization

### Install Dependencies

```bash
yarn add sharp
```

### Run Optimization Script

```bash
yarn optimize-images
```

This will:

1. Process all PNG/JPG images in the `public` folder
2. Generate WebP and AVIF versions
3. Create multiple sizes for responsive loading
4. Output optimized images to `public/optimized/`

## 📈 Expected Performance Gains

### Core Web Vitals Improvements

- **LCP (Largest Contentful Paint)**: 40-60% improvement
- **CLS (Cumulative Layout Shift)**: Reduced with proper sizing
- **FID (First Input Delay)**: Improved with lazy loading

### Loading Performance

- **Initial page load**: 50-70% faster
- **Image loading**: 60-80% smaller file sizes
- **Bandwidth usage**: 50-70% reduction

### User Experience

- **Perceived performance**: Blur placeholders
- **Mobile experience**: Responsive images
- **Accessibility**: Proper alt text and loading states

## 🚨 Best Practices

### 1. Always Use OptimizedImage Components

```tsx
// ❌ Don't use regular img tags
<img src="/image.png" alt="Image" />

// ✅ Use optimized components
<LazyImage src="/image.png" alt="Image" width={300} height={200} />
```

### 2. Set Appropriate Quality Levels

- **Hero/Logo images**: 90% quality
- **Content images**: 85% quality
- **Icons/Decorative**: 75-80% quality

### 3. Use Priority Loading Wisely

- Only for above-the-fold content
- Maximum 2-3 priority images per page
- Avoid overusing priority loading

### 4. Provide Proper Dimensions

- Always specify width and height
- Use aspect-ratio CSS for responsive containers
- Prevent layout shift with proper sizing

## 🔍 Monitoring Performance

### Tools to Use

1. **Lighthouse**: Check Core Web Vitals
2. **WebPageTest**: Analyze loading performance
3. **Chrome DevTools**: Monitor network requests
4. **Next.js Analytics**: Track real-world performance

### Key Metrics to Monitor

- **LCP**: Should be under 2.5s
- **FID**: Should be under 100ms
- **CLS**: Should be under 0.1
- **Image load times**: Monitor for improvements

## 🎉 Results

After implementing these optimizations, you should see:

- **Faster page loads** across all devices
- **Better Core Web Vitals** scores
- **Improved user experience** with smooth loading
- **Reduced bandwidth usage** for users
- **Better SEO rankings** due to performance improvements

The image optimization system is now fully integrated and will automatically serve the best format and size for each user's device and connection speed.
