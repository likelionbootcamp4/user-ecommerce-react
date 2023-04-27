import { useParams } from "react-router-dom";

export default function ProductListing() {
  const { category } = useParams();
  return <div>ProductListing {category}</div>;
}
