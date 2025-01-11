import { useParams } from 'react-router-dom';

export default function BlogDetail() {
  const { id } = useParams();
  return <h1 className="text-2xl font-bold">Blog Detail Page for Post {id}</h1>;
}

