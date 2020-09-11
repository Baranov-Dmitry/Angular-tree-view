export interface NodeTree {
  parentId: number;
  id: number;
  name: string;
  children?: NodeTree[];
}
