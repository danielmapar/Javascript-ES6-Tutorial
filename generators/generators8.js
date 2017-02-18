class Comment{
  constructor(content,author,children){
    this.content = content;
    this.author = author;
    this.children = children;
  }
  
  *ContentIterator(){
    yield this.content;
    for( let child of this.children ){
      yield* child.ContentIterator();
    }
  }
  
  *AuthorIterator(){
    yield this.author;
    for( let child of this.children ){
      yield* child.AuthorIterator();
    }
  }
}

const children = [
  new Comment("Great stuff", "Steve", [
    new Comment("I'm a baby", "Todd", [])
  ]),
  new Comment("Awesome stuff", "Bill", []),
  new Comment("Good stuff", "Dave", [])
];
const tree = new Comment("I'm a grandpa", "Jeptha", children);

const contentValues = [];
for( let value of tree.ContentIterator() ){
  contentValues.push(value);
}

const authorValues = [];
for( let value of tree.AuthorIterator() ){
  authorValues.push(value);
}

console.log("contentValues: ", contentValues );
console.log("authorValues: ", authorValues );