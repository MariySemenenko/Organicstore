import { motion } from 'framer-motion';
import '../AnimatedImages.css';

export const AnimatedImages = () => {
  const images = [
    {
      name: 'Columbia Chocolate',
      text: 'Delicious chocolate',
    },
    {
      name: 'Pure Jeans Coffee',
      text: 'Premium coffee blend',
    },
    {
      name: 'Turmeric Powder',
      text: 'Natural spice',
    },
    {
      name: 'Pure Jeans Coffee',
      text: 'Premium coffee blend',
    },
    {
      name: 'Columbia Chocolate',
      text: 'Delicious chocolate',
    },
    {
      name: 'Turmeric Powder',
      text: 'Natural spice',
    },
  ];
  return (
    <div className="animated-images-container">
    {images.map((image, index) => (
      <motion.div
        key={index}
        className="animated-image"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: index * 0.2 }}
      >
        <>
        <picture
          src={`path/to/${image.name}`}
          alt={`Animated Image ${index + 1}`}
        />
        <p>{image.text}</p>
        </>
      </motion.div>
    ))}
  </div>
  );
};


//initial={{ x: "100%" }} якщо потрібно анімацію з правої сторони