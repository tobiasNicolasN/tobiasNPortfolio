import Link from 'next/link';

function Footer() {
  return (
    <footer className="font-sans text-gray-200 text-sm mt-44">
        <hr className="border-gray-200 dark:border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between pt-5 pb-5 px-10">
          <span className="">
            © 2024{' '}
            <Link
              href="/"
              target="_blank"
              className="underline hover:no-underline"
            >
              Tobias Nuñez
            </Link>
            .
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <span>
            <Link className='underline hover:no-underline' href={"https://www.linkedin.com/in/tobiasnicolasn/"} target='_blank'>
                LinkedIn
                </Link>{" "}/{" "}<Link className='underline hover:no-underline' href={"https://github.com/tobiasNicolasN"} target='_blank'>
                GitHub
                </Link>
            </span>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
