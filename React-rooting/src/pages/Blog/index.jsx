import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Blog Page</h1>
      <ul>
        <li><Link to="/blog/1" className="text-blue-500 hover:underline">Blog Post 1</Link></li>
        <li><Link to="/blog/2" className="text-blue-500 hover:underline">Blog Post 2</Link></li>
      </ul>
    </div>
  );
}

