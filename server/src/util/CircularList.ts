import ListNode from "./ListNode";

class CircularList<T> {
  private length: number;
  private head?: ListNode<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  public getElementAt(index: number): ListNode<T> | undefined {
    if (index >= 0 && index <= this.length) {
      // Head
      let node = this.head;
      let str = node?.toString() + " ";

      // Just one item
      if (this.length === 1) return this.head;

      // Increment until it reach the index or there is no next node
      for (let i = 0; i < index && node != undefined; i++) {
        node = node.getNext();
        str += node?.toString() + " ";
      }
      //console.log(str);
      return node;
    }
    return undefined;
  }

  public append(value: T) {
    const node = new ListNode(value);

    if (this.head === undefined) {
      this.head = node;
      this.head.setNext(node);
    } else {
      let last = this.getElementAt(this.length - 1);
      last?.setNext(node);
      node.setNext(this.head);
      //this.head.setNext(node);
      console.log(
        "IN ",
        node.toString(),
        " | Last Found ",
        last?.toString(),
        " | Future REF",
        node.getNext()?.toString(),
        " | Curr lgth ",
        this.length - 1
      );
    }
    this.length++;
  }

  public insertAt(value: T, index: number) {
    if (index >= 0 && index <= this.length) {
      let newNode = new ListNode(value);

      // Head insert
      if (index === 0) {
        // Update head
        let lastHead = this.head;
        let lastNode = this.getElementAt(this.length - 1);
        this.head = newNode;

        // Update last item head
        newNode.setNext(lastHead?.getNext() as ListNode<T>);
        lastNode?.setNext(newNode);
      } else {
        // Any index, even end
        let prevNode = this.getElementAt(index - 1);
        newNode.setNext(prevNode?.getNext() as ListNode<T>);
        prevNode?.setNext(newNode);
      }
      this.length++;
      return true;
    }
    return false;
  }

  public removeAt(index: number) {
    if (index >= 0 && index <= this.length) {
      let remNode = this.getElementAt(index);
      let value = remNode?.getValue();

      if (index === 0) {
        if (this.length === 1) {
          this.head = undefined;
        } else {
          // Head remove
          let nextNode = this.head?.getNext();
          let lastNode = this.getElementAt(this.length - 1);
          this.head = nextNode;
          lastNode?.setNext(nextNode as ListNode<T>);
        }
      } else {
        // Any other node
        let nextNode = remNode?.getNext();
        let prevNode = this.getElementAt(index - 1);
        prevNode?.setNext(nextNode as ListNode<T>);
      }
      this.length--;
      return value;
    }
    return undefined;
  }

  public indexOf(element: T) {
    let index = -1;
    let node = this.head;

    while (node) {
      if (node.getValue() === element) return ++index;
      index++;
      node = node.getNext();

      // Break if completed a complete route
      if (node === this.head) {
        index = -1;
        break;
      }
    }

    return index;
  }

  public contains(element: T) {
    return this.indexOf(element) !== -1;
  }

  public getHead() {
    return this.head;
  }

  public remove(element: T) {
    return this.removeAt(this.indexOf(element));
  }

  public pop() {
    return this.removeAt(this.length - 1);
  }

  public size() {
    return this.length;
  }

  public isEmpty() {
    return this.length === 0;
  }

  public toArray() {
    let arr = [];
    let node = this.head;

    while (node) {
      arr.push(node.getValue());
      node = node.getNext();
      if (node === this.head) break;
    }
    return arr;
  }

  public toString() {
    let node = this.head;
    let string = "{";
    let count = 0;

    while (node) {
      string += `[${count}] => ${node.toString()}`;
      count++;

      if (!node.getNext()) console.log("Not at " + node.toString());
      node = node.getNext();

      if (node == this.head) break;
      string += ", ";
    }
    return (string += "}");
  }
}

export default CircularList;
