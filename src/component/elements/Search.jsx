import { Search } from 'lucide-react';
import { Input } from '../parts/input';

function Searchinput(props) {
  return (
    <form className="sm:flex-initial w-full">
      <div className="relative">
        <Search className="absolute left-2.5 top-4 h-4 w-4 text-[#A9A9A9]" />
        <Input
          type="search"
          name={props.name}
          placeholder="Search products..."
          className="pl-8 pr-4 py-3 h-full placeholder:text-dark/40 border-none bg-dark/10"
          onChange={props.onInputChange}
        />
      </div>
    </form>
  );
}

export default Searchinput;
