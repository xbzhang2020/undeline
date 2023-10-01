export type UnderlineContent = {
  pageId?: string; // 页面id
  sectionId: string; // 章节id
  id: string | number; // 划线内容的id
  content: string; // 划线内容
  sartOffset: number; // 划线内容起点相对于章节内容起点的偏移量
  endOffset: number; // 划线内容结束位置相对于章节内容起点的偏移量
};
