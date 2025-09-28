import * as motion from "motion/react-client";

// const box = {
//   width: 100,
//   height: 100,
//   //   backgroundColor: "#9911ff",
//   borderRadius: 5,
// };

export default function Gestures({ children, classes }) {
  return (
    <motion.div
      className={classes}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
