export class UnderlineService {
  static getSelectionRange(paragraph?: HTMLElement) {
    const selection = document.getSelection();
    if (!selection) return null;

    const selectContent = selection.toString();
    const selectContentTrim = selectContent.trim();

    // 选区内容是否为空
    if (!selectContentTrim) {
      return null;
    }

    // 选区是否在章节内
    if (paragraph?.textContent?.indexOf(selectContentTrim) == -1) {
      console.warn("超出合法范围的选区");
      return null;
    }

    // 移除选区两端的空白内容
    const range = selection.getRangeAt(0);
    if (selectContent != selectContentTrim) {
      const arrStartSpace = selectContent.match(/^\s+/g);
      const arrEndSpace = selectContent.match(/\s+$/g);
      if (arrStartSpace) {
        range.setStart(range.startContainer, range.startOffset + arrStartSpace[0].length);
      }
      if (arrEndSpace) {
        range.setEnd(range.endContainer, range.endOffset - arrEndSpace[0].length);
      }
    }

    return range;
  }
}

export default UnderlineService;
