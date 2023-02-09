class ListNode<V> {
  private value: V;
  private next?: ListNode<V>;

  constructor(val: V, next?: ListNode<V>) {
    this.value = val;
    this.next = undefined;
    if (next) this.next = next;
  }

  public getValue(): V {
    return this.value;
  }

  public getNext(): ListNode<V> | undefined {
    return this.next;
  }
  public setNext(node: ListNode<V>): void {
    this.next = node;
  }

  public toString(): string {
    let string = `{value: ${this.value}`;
    //if (this.next !== this) string += `, next: ${this.getNext()?.toString()}`;
    if(!this.next) + ", next: undefined"
    return string + "}";
  }
}

export default ListNode;
