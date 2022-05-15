interface IVisitor {
  visitParagraph(paragrah: Paragrah): void;
  visitPicture(picture: Picture): void;
  visitTable(table: Table): void;
}

class Renderer implements IVisitor {
  visitParagraph(paragrah: Paragrah): void {}
  visitPicture(picture: Picture): void {}
  visitTable(table: Table): void {}
}

class ScreenReader implements IVisitor {
  visitParagraph(paragrah: Paragrah): void {}
  visitPicture(picture: Picture): void {}
  visitTable(table: Table): void {}
}

interface IDocumentItem {
  accept(visitor: IVisitor): void;
}

class Paragrah implements IDocumentItem {
  accept(visitor: IVisitor): void {
    visitor.visitParagraph(this);
  }
}

class Picture implements IDocumentItem {
  accept(visitor: IVisitor): void {
    visitor.visitPicture(this);
  }
}

class Table implements IDocumentItem {
  accept(visitor: IVisitor): void {
    visitor.visitTable(this);
  }
}

let doc: IDocumentItem[] = [new Paragrah(), new Table()];

let renderer: IVisitor = new Renderer();

for (let item of doc) {
  item.accept(renderer);
}
