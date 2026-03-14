import { useEffect, useState } from "react";

import { SearchInput } from "@/features/home/ui/search-input";
import { useDebouncedValue } from "@/shared/hooks";

interface HomePageSearchProps {
  className?: string;
  onDebouncedChange: (value: string) => void;
}

export const HomePageSearch = ({
  className,
  onDebouncedChange,
}: HomePageSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebouncedValue(searchQuery, 300);

  useEffect(() => {
    onDebouncedChange(debouncedSearch);
  }, [debouncedSearch, onDebouncedChange]);

  return (
    <SearchInput
      value={searchQuery}
      onChange={setSearchQuery}
      className={className}
    />
  );
};
