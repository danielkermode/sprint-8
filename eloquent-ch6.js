/*** A vector Type ***/
function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(vec) {
  return new Vector(this.x + vec.x, this.y + vec.y);
}

Vector.prototype.minus = function(vec) {
  return new Vector(this.x - vec.x, this.y - vec.y);
}

Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});

/*** Another Cell ***/
//requires a TextCell implementation. I'll be honest, I'm not 100% certain what is going on here
//(but this console.logs the right things)! I understand how prototypes work but I didn't really get
//exactly what TextCell was doing.
function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function() {
  return Math.max(this.inner.minWidth(), this.width);
};
StretchCell.prototype.minHeight = function() {
  return Math.max(this.inner.minHeight() + 1, this.height);
};
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};