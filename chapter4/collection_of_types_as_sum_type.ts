class Paragraph {}

class Picture {}

class Table {}

class MyDocument {
  items: (Paragraph | Picture | Table)[];
}
