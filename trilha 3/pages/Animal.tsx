import { useParams } from "react-router-dom";

export default function Animal() {
  const { name } = useParams<{ name: string }>();
  return <h2>Animal: {name}</h2>;
}
