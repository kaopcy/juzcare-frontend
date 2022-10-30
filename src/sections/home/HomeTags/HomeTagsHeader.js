// sections
import HomeTagSearchBar from './HomeTagSearchBar';

function HomeTagsHeader() {
   return (
      <header className="flex items-center justify-between w-full mb-6 ">
         <h1>แท็ก</h1>
         <HomeTagSearchBar />
      </header>
   );
}

export default HomeTagsHeader;
