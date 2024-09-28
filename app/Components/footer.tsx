'use client'

const Footer: React.FC = () => {
    return(
      <footer className="bg-white m-4 flex flex-col flex-wrap justify-between mx-auto p-4 stick border-t-2">
      <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 
          <a href="/" className="hover:underline"> Deanna Woodhouse-Hawkins</a>. All Rights Reserved.
        </span>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <a href="https://github.com/Norstar134/we-dev-test" className="hover:underline">Gitub Repo</a>
        </span>
      </div>
    </footer>
    )
}

export default Footer;