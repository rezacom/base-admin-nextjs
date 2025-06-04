export interface PaginationComponent {
  count: number;
  page: number;
  size?: number;
  onChange: (newPage: number) => void;
  onChangeSize: (newSize: number) => void;
  total?: number;
}
