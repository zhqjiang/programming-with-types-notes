interface IDocumentItem {}

class Paragraph implements IDocumentItem {}

class Picture implements IDocumentItem {}

class Table implements IDocumentItem {}

class MyDocument {
  items: IDocumentItem[];
}

