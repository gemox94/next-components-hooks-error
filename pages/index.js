import Link from 'next/link';

const Home = () => {
  return (
      <ul>
          <li>
              <Link href="/hoc">
                  <a style={{ color: 'blue' }}>
                      Authorization HOC Page (Does not work)
                  </a>
              </Link>
          </li>
          <li>
              <Link href="/wrapper">
                  <a style={{ color: 'blue' }}>
                      Authorization Layout Wrapper Page (Works)
                  </a>
              </Link>
          </li>
      </ul>
  );
}
export default Home;
