import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

const SEOHead = ({
  title = "Black Rus - Лучший CRMP сервер",
  description = "Топовый CRMP сервер с уникальным геймплеем и активным сообществом",
  keywords = "CRMP, сервер, GTA, SAMP, Black Rus",
  image = "/og-image.jpg",
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    }

    // Update Open Graph image
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute("content", image);
    }
  }, [title, description, keywords, image]);

  return null;
};

export default SEOHead;
