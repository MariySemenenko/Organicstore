import { motion } from 'framer-motion';
import '../AnimatedImages.css';

export const AnimatedImages = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
  ];
  return (
    <div className="animated-images-container">
      {images.map((image, index) => (
        <motion.img
          key={index}
          className="animated-image"
          src={`path/to/${image}`}
          alt={`Animated Image ${index + 1}`}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: index * 0.2 }}
        />
      ))}
    </div>
  );
};


//initial={{ x: "100%" }} якщо потрібно анімацію з правої сторони