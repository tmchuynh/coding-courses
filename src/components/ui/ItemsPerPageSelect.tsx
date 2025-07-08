import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ItemsPerPageSelectProps {
  value: number;
  onValueChange: (value: number) => void;
  options?: number[];
}

export function ItemsPerPageSelect({
  value,
  onValueChange,
  options = [4, 6, 8, 12],
}: ItemsPerPageSelectProps) {
  return (
    <div className="flex gap-2 items-center">
      <span className="text-muted-foreground text-sm">Show</span>
      <Select
        value={value.toString()}
        onValueChange={(val) => onValueChange(Number(val))}
      >
        <SelectTrigger className="w-16">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option.toString()}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <span className="text-muted-foreground text-sm">per page</span>
    </div>
  );
}
