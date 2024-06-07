/* eslint-disable @next/next/no-img-element */
import { BlogPostType } from "@/types/blogPostType";
import Link from "next/link";

interface BlogPostSideProps {
  data: BlogPostType;
}

export const BlogPostSide: React.FC<BlogPostSideProps> = ({ data }) => {
  // recent posts or related posts
  return (
    <aside className="space-y-8">
      <div className="rounded-lg bg-white p-6 shadow">
        <h3 className="mb-4 text-lg font-bold">Recent Posts</h3>
        <ul className="space-y-4">
          <li>
            <Link
              href="#"
              className="flex items-center space-x-4"
              prefetch={false}
            >
              <img
                src="/placeholder.svg"
                width={80}
                height={60}
                alt="Recent post thumbnail"
                className="h-15 w-20 rounded-lg object-cover"
              />
              <div>
                <h4 className="text-base font-medium">
                  The Rise of Artificial Intelligence
                </h4>
                <p className="text-sm text-gray-500 ">August 15, 2023</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center space-x-4"
              prefetch={false}
            >
              <img
                src="/placeholder.svg"
                width={80}
                height={60}
                alt="Recent post thumbnail"
                className="h-15 w-20 rounded-lg object-cover"
              />
              <div>
                <h4 className="text-base font-medium">
                  The Future of Remote Work
                </h4>
                <p className="text-sm text-gray-500 ">July 28, 2023</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center space-x-4"
              prefetch={false}
            >
              <img
                src="/placeholder.svg"
                width={80}
                height={60}
                alt="Recent post thumbnail"
                className="h-15 w-20 rounded-lg object-cover"
              />
              <div>
                <h4 className="text-base font-medium">
                  The Impact of Climate Change
                </h4>
                <p className="text-sm text-gray-500 ">June 12, 2023</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="rounded-lg bg-white p-6 shadow ">
        <h3 className="mb-4 text-lg font-bold">Categories</h3>
        <ul className="space-y-2">
          <li>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900"
              prefetch={false}
            >
              Technology
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900"
              prefetch={false}
            >
              Business
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900"
              prefetch={false}
            >
              Lifestyle
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900"
              prefetch={false}
            >
              Travel
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900"
              prefetch={false}
            >
              Entertainment
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
