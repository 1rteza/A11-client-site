import { useState, useEffect } from "react";
import { motion } from "motion/react"

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    // Show button when scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 150) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        visible && (
            <motion.button
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                onClick={scrollToTop}
                className="fixed bottom-25 right-5 p-2 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-transform hover:scale-110 z-50 cursor-pointer"
                aria-label="Scroll to top"
            >
                <img
                    src="https://i.ibb.co/bg1wV4zK/image.png" alt="" className="w-10 text-white -rotate-90" />
            </motion.button>
        )
    );
};

export default ScrollToTopButton;
