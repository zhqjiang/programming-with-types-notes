class Renderer {}
class ScreenReader {}

interface IDocumentItem {
  render(renderer: Renderer): void;
  read(screenReader: ScreenReader): void;
}

class Paragraph implements IDocumentItem {
  render(renderer: Renderer) {}
  read(screenReader: ScreenReader) {}
}

class Picture implements IDocumentItem {
  render(renderer: Renderer) {}
  read(screenReader: ScreenReader) {}
}

class Table implements IDocumentItem {
  render(renderer: Renderer): void {}
  read(screenReader: ScreenReader) {}
}

let doc: IDocumentItem[] = [new Paragraph(), new Table()];
let renderer: Renderer = new Renderer();

for (let item of doc) {
  item.render(renderer);
}
