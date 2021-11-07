import { Dimension } from './dimension';

export interface IChair {
  height: number;
  width: number;
  depth: number;
  getDimensions(): Dimension;
}

export default class Chair implements IChair {
  height!: number;
  width!: number;
  depth!: number;

  getDimensions(): Dimension {
    return {
      height: this.height,
      width: this.width,
      depth: this.depth,
    };
  }
}
