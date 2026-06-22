import { IconDownload, IconUpload, IconSpark, IconSearch, IconTool } from "./Icons";

const MAP = {
  download: IconDownload,
  upload: IconUpload,
  spark: IconSpark,
  search: IconSearch,
  tool: IconTool
};

export default function CategoryIcon({ icon, className, size }) {
  const Component = MAP[icon] || IconTool;
  return <Component className={className} size={size} />;
}
