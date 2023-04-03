export class ProductDeque {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public imageUrl: string,
    public price: number,
    public quantity: number,
    public createdAt: Date,
  ) {}
}

class DequeNode {
  constructor(
    public data: ProductDeque,
    public next: DequeNode | null = null,
    public prev: DequeNode | null = null,
  ) {}
}

class Deque {
  private _size = 0;
  private _front: DequeNode | null = null;
  private _back: DequeNode | null = null;

  public get size(): number {
    return this._size;
  }

  public get front(): ProductDeque | null {
    return this._front ? this._front.data : null;
  }

  public get back(): ProductDeque | null {
    return this._back ? this._back.data : null;
  }

  public addFront(data: ProductDeque): void {
    if (!this._front) {
      this._front = new DequeNode(data);
      this._back = this._front;
    } else {
      const node = new DequeNode(data, this._front);
      this._front.prev = node;
      this._front = node;
    }
    this._size++;
  }

  public addBack(data: ProductDeque): void {
    if (!this._back) {
      this._back = new DequeNode(data);
      this._front = this._back;
    } else {
      const node = new DequeNode(data, null, this._back);
      this._back.next = node;
      this._back = node;
    }
    this._size++;
  }

  public removeFront(): void {
    if (!this._front) {
      throw new Error('Deque vazio!');
    }
    if (this._front === this._back) {
      this._front = null;
      this._back = null;
    } else {
      this._front = this._front.next;
      this._front!.prev = null;
    }
    this._size--;
  }

  public removeBack(): void {
    if (!this._back) {
      throw new Error('Deque vazio!');
    }
    if (this._front === this._back) {
      this._front = null;
      this._back = null;
    } else {
      this._back = this._back.prev;
      this._back!.next = null;
    }
    this._size--;
  }

  public buy(name: string, quantity: number): ProductDeque {
    if (quantity <= 0) {
      throw new Error(`Quantidade ${quantity} inválida!`);
    }
    let node = this._front;
    while (node) {
      if (node.data.name === name) {
        if (node.data.quantity < quantity) {
          throw new Error(`Produto ${name} não tem estoque suficiente!`);
        }
        node.data.quantity -= quantity;
        return node.data;
      }
      node = node.next;
    }
    throw new Error(`Produto ${name} não encontrado!`);
  }

  public update(id: string, newProduct: ProductDeque): void {
    let node = this._front;
    while (node) {
      if (node.data.id === id) {
        node.data = newProduct;
        return;
      }
      node = node.next;
    }
    throw new Error(`Produto ${id} não encontrado!`);
  }

  public remove(name: string): void {
    let node = this._front;
    while (node) {
      if (node.data.name === name) {
        if (this._size === 1) {
          this._front = null;
          this._back = null;
        } else if (node === this._front) {
          this._front = node.next;
          this._front!.prev = null;
        } else if (node === this._back) {
          this._back = node.prev;
          this._back!.next = null;
        } else {
          node.prev!.next = node.next;
          node.next!.prev = node.prev;
        }
        this._size--;
        return;
      }
      node = node.next;
    }
    throw new Error(`Produto ${name} não encontrado!`);
  }

  public findByName(name: string): ProductDeque | null {
    let node = this._front;
    while (node) {
      if (node.data.name === name) {
        return node.data;
      }
      node = node.next;
    }
    return null;
  }

  public findByID(name: string): ProductDeque | null {
    let node = this._front;
    while (node) {
      if (node.data.id === name) {
        return node.data;
      }
      node = node.next;
    }
    return null;
  }

  public list(): ProductDeque[] {
    const list: ProductDeque[] = [];
    let current = this._front;

    while (current) {
      list.push(current.data);
      current = current.next;
    }

    return list;
  }
}

export { Deque };
