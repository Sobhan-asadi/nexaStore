import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { useEffect } from "react";

export default function Photoswipe({ galleryID, images }) {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: `#${galleryID}`,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, [galleryID]);

  return (
    <div className="pswp-gallery" id={galleryID}>
      {images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={`${galleryID}-${index}`}
          target="_blank"
          rel="noreferrer"
        >
          <img src={image.thumbnailURL} alt="" />
        </a>
      ))}
    </div>
  );
}
