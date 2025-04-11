import Link from 'next/link';

function Footer() {
  return (
    <footer className="flex flex-col font-sans text-gray-800 dark:text-gray-200 text-sm md:text-sm lg:text-base items-center relative bottom-0">
      <hr className="border-gray-800 dark:border-gray-200 w-full h-1" />
    <div className='items-center w-11/12 md:w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12'>
      <div className="flex items-center justify-between pt-5 pb-5">
        <span className="">
          © 2024{' '}
          <Link href="/" className="underline hover:no-underline">
            Tobias Nuñez
          </Link>
          .
        </span>
        <div className="flex justify-center">
          <span>
            <Link
              className="underline hover:no-underline"
              href={'https://www.linkedin.com/in/tobiasnicolasn/'}
              target="_blank"
            >
              LinkedIn
            </Link>{' '}
            /{' '}
            <Link
              className="underline hover:no-underline"
              href={'https://github.com/tobiasNicolasN'}
              target="_blank"
            >
              GitHub
            </Link>
          </span>
        </div>
      </div>
    </div>

    </footer>
  );
}

export default Footer;
